import { Client } from "@gradio/client";
import multer from "multer";
import fs from "fs/promises";
import path from "path";

// Multer를 사용하여 파일을 임시로 디스크에 저장
const upload = multer({ dest: './tmp' });

export const config = {
  api: {
    bodyParser: false, // bodyParser를 비활성화하여 파일 업로드 처리 가능
  },
};

// 파일 업로드 후 처리를 위한 래퍼 함수
const handler = async (req, res) => {
  try {
    // multer로 파일 업로드를 처리
    await new Promise((resolve, reject) => {
      upload.single('image')(req, res, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });

    const imageFile = req.file; // 업로드된 파일 정보
    let eps_value = req.body.eps_value;

    // eps_value가 문자열로 전달되었을 경우, float으로 변환
    if (typeof eps_value === 'string') {
      eps_value = parseFloat(eps_value);
    }

    if (!imageFile) {
      console.error("No file uploaded or file is empty.");
      return res.status(400).json({ error: "No file uploaded or invalid file" });
    }

    // 파일 경로 확인 및 정규화
    const normalizedPath = path.normalize(imageFile.path);
    console.log('Normalized path:', normalizedPath);

    // 이미지 파일을 읽어 Blob으로 변환
    const imageData = await fs.readFile(normalizedPath);
    console.log('Image data read successfully.');

    const imageBlob = new Blob([imageData], { type: imageFile.mimetype });

    // Gradio API 클라이언트 연결
    const client = await Client.connect("onehowon/adversarial_attack_pgd");

    // /predict 엔드포인트로 요청
    const result = await client.predict("/predict", { 
      image: imageBlob,  // Blob 객체로 이미지 전송
      eps_value: eps_value, // eps_value 값 전송
    });

    // Gradio API가 반환하는 이미지 데이터에서 Base64로 변환할 수 있는지 확인
    // Gradio API가 이미지 파일 경로를 반환하는 경우 그 파일을 다시 읽어와 Base64로 변환

    const processedImagePath = normalizedPath; // 처리된 이미지 파일 경로 (이 경로가 실제로 Gradio API에서 생성한 이미지 경로라고 가정)

    // 이미지 파일을 Base64로 인코딩
    const imageBuffer = await fs.readFile(processedImagePath);
    const base64Image = imageBuffer.toString('base64'); // Base64로 변환

    // Base64 이미지 데이터 반환
    res.status(200).json({ image: base64Image });

    // 임시로 저장된 파일 삭제
    await fs.unlink(processedImagePath);

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default handler;

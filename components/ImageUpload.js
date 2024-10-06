import { useState } from 'react';

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [epsValue, setEpsValue] = useState(0.3);
  const [resultImage, setResultImage] = useState(null);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('eps_value', epsValue);

    try {
        const response = await fetch(process.env.NEXT_PUBLIC_HF_API_URL, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.HF_API_KEY}`,  // 환경 변수로 토큰 추가
          },
          body: formData,
        });
        const data = await response.json();
        setResultImage(data.image);
      } catch (error) {
        console.error("API 호출 오류:", error);
      }
    };

    return (
        <div>
          <input type="file" onChange={handleImageUpload} />
          <input
            type="range"
            min="0.1"
            max="1.0"
            step="0.1"
            value={epsValue}
            onChange={(e) => setEpsValue(e.target.value)}
          />
          <button onClick={handleSubmit}>이미지 처리</button>
          {resultImage && <img src={`data:image/png;base64,${resultImage}`} alt="처리된 이미지" />}
        </div>
      );
    }
    
export default ImageUpload;

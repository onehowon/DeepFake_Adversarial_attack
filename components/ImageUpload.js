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
      const response = await fetch('/api/predict', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }

      const data = await response.json();

      // 처리된 이미지를 Base64 문자열로 처리
      if (data.image) {
        setResultImage(`data:image/png;base64,${data.image}`);
      } else {
        console.error('No image data received');
      }
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
      {resultImage && <img src={resultImage} alt="처리된 이미지" />}
    </div>
  );
}

export default ImageUpload;

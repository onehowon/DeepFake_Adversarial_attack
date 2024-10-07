export default function Home() {
  return (
    <div>
      <h1>Adversarial Image Attack</h1>
      <script
        type="module"
        src="https://gradio.s3-us-west-2.amazonaws.com/4.44.1/gradio.js"
      ></script>
      <gradio-app src="https://onehowon-adversarial-attack-pgd.hf.space"></gradio-app>
    </div>
  );
}

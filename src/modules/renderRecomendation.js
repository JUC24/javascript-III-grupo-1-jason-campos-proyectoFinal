function customRenderRecomendation() {
  document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const encodedContent = urlParams.get('contenido');
    const decodedContent = decodeURIComponent(encodedContent);
    const plantPreview = document.getElementById('recommendation');
    plantPreview.innerHTML = decodedContent;
  });
}

export default customRenderRecomendation;

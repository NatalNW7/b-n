"use client";

export default function PhotoUpload() {
  const DRIVE_FOLDER_URL = "https://drive.google.com/drive/folders/YOUR_FOLDER_ID";

  return (
    <div className="photo-hub__upload">
      <div className="photo-hub__upload-area">
        <span className="photo-hub__upload-icon">📸</span>
        <p className="photo-hub__upload-label">Compartilhe suas fotos</p>
        <p className="photo-hub__upload-hint">
          Envie seus registros para o nosso álbum compartilhado
        </p>
        <a
          href={DRIVE_FOLDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="photo-hub__upload-btn"
        >
          Enviar Fotos
        </a>
      </div>
    </div>
  );
}

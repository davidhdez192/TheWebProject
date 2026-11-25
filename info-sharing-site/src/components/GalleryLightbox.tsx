type GalleryLightboxProps = {
    src: string;
    title: string;
    description: string;
    onClose: () => void;
}

function GalleryLightbox({ src, title, description, onClose }: GalleryLightboxProps) {
    return (
        <div className="lightbox-overlay">
            <div className="lightbox-content">
                <button className="lightbox-close" onClick={onClose}>
                    *
                </button>
            
            
                <div className="lightbox-image">
                    <img src={src} alt="Beeg Cat" />
                </div>
                

                <div className="lightbox-info">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default GalleryLightbox;
type SideProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function Side({ isOpen, onClose }: SideProps) {
    if (typeof window !== "undefined") {
        console.log("Side component render, isOpen:", isOpen);
    }
    if (!isOpen) {
        return null;
    }

    return (
        <>
            <div className="modal-bg" onClick={onClose}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <button className="modal-close-btn" onClick={onClose}>×</button>
                    <h2>Modal Title</h2>
                    <p>This is the modal content. Replace this with your desired content.</p>
                </div>
            </div>
        </>
    );
}

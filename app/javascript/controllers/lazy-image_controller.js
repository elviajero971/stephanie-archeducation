import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="lazy-image"
export default class extends Controller {
    static targets = ["modal", "image"];

    open(event) {
        // Get the full-size image source from the clicked thumbnail container
        const fullImageSrc = event.currentTarget.dataset.lazyImageFullSrc;

        if (fullImageSrc) {
            // Set the modal image source
            this.imageTarget.src = fullImageSrc;

            // Show the modal
            this.modalTarget.classList.add("active");

            document.body.style.overflow = "hidden";
        }
    }

    close() {
        // Hide the modal
        this.modalTarget.classList.remove("active");

        // Clear the image source to save memory
        this.imageTarget.src = "";

        document.body.style.overflow = "";
    }
}

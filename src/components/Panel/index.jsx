import React, { useEffect, useState } from "react";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { ArrowContainer, Container, Label } from "./Styles";

const Panel = ({ imageData, label, altText, gallery }) => {
  const [open, setOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(null);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <Container>
      <GatsbyImage
        image={imageData}
        alt={altText}
        style={{ width: "60%", maxWidth: "800px", cursor: "pointer" }}
        onClick={onOpenModal}
      />
      <Label>{label}</Label>
      <Modal open={open} onClose={onCloseModal} center showCloseIcon={false}>
        {gallery ? (
          <Carousel
            selectedItem={currentSlide}
            onChange={index => setCurrentSlide(index)}
            showArrows={false}
          >
            {gallery.map(image => (
              <GatsbyImage image={image} />
            ))}
          </Carousel>
        ) : (
          <p>No images found</p>
        )}
        <ArrowContainer>
          <StaticImage
            src="../../images/arrow-back.png"
            onClick={() => setCurrentSlide(currentSlide - 1)}
            style={{ cursor: "pointer" }}
          />
          <StaticImage
            src="../../images/arrow-forward.png"
            onClick={() => setCurrentSlide(currentSlide + 1)}
            style={{ cursor: "pointer" }}
          />
        </ArrowContainer>
      </Modal>
    </Container>
  );
};

export default Panel;

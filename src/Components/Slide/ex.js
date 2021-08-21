import React from "react";

class ImageSlide extends React.Component {
  constructor() {
    super();
    this.state = {
      imageCurrentNo: 0,
    };
  }

  onChangeImage = (index) => {
    if (this.props.images.length <= index) index = 0;
    if (index < 0) index = this.props.images.length - 1;

    this.setState({ imageCurrentNo: index });
  };

  render() {
    const { images } = this.props;
    return (
      <div className="imageSlide">
        <div className="slideBox">
          <div
            className="slideList"
            style={{
              transform: `translate3d(
                ${this.state.imageCurrentNo * -500}px, 0px, 0px`,
            }}
          >
            {images?.map((image, no) => (
              <div className="slideContent" key={no}>
                <picture>
                  <img src={image} />
                </picture>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ImageSlide;

import Head from "next/head";
import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  NavbarBrand,
  Jumbotron,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import { Waypoint } from "react-waypoint";
import Skeleton from "react-loading-skeleton";
import {
  LazyLoadImage,
  trackWindowScroll
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import delay from "../utils/delay";

const imagesGallerys = [
  "https://uhdwallpapers.xyz/media/images/ori/2020/09/03/minimal-morning-landscape-8k-wallpaper-2947121599102258.jpg",
  "https://uhdwallpapers.xyz/media/images/ori/2020/09/03/noob-saibot-mortal-kombat-11-wallpaper-7610901599102220.jpg",
  "https://uhdwallpapers.xyz/media/images/ori/2020/09/03/shepard-and-tali-8k-wallpaper-589601599100515.jpg",
  "https://uhdwallpapers.xyz/media/images/ori/2020/09/02/spiral-8k-wallpaper-9633961599013993.jpg",
  "https://uhdwallpapers.xyz/media/images/ori/2020/09/02/red-black-minimal-abstract-8k-wallpaper-7487721599012187.jpg"
];
// //// v1
// const RenderGallery = ({ numberOfGallery, isRenderGallery }) => {
//   const galleryElm = [];
//   const galleryLength = imagesGallerys.length;
//   for (let i = 0; i < numberOfGallery; i++) {
//     const imageIndex = i % galleryLength;
//     const elm = (
//       <Card style={{ width: 300 }} key={`card-key-${i}`}>
//         <CardImg
//           top
//           width={318}
//           height={180}
//           src={`${imagesGallerys[imageIndex]}`}
//           alt="Card image cap"
//         />
//       </Card>
//     );
//     galleryElm.push(elm);
//   }

//   return (
//     <div
//       className={`d-flex flex-row  justify-content-around align-items-center flex-wrap`}
//     >
//       {galleryElm}
//     </div>
//   );
// };

// //// v2 use skeleton
// const RenderGallery = ({ numberOfGallery, isRenderGallery }) => {
//   const galleryElm = [];
//   const galleryLength = imagesGallerys.length;
//   for (let i = 0; i < numberOfGallery; i++) {
//     const imageIndex = i % galleryLength;
//     const elm = (
//       <Card style={{ width: 300 }} key={`card-key-${i}`}>
//         {isRenderGallery ? (
//           <CardImg
//             top
//             width={318}
//             height={180}
//             src={`${imagesGallerys[imageIndex]}`}
//             alt="Card image cap"
//           />
//         ) : (
//           <Skeleton width={318} height={180} />
//         )}
//       </Card>
//     );
//     galleryElm.push(elm);
//   }
//   return (
//     <div
//       className={`d-flex flex-row  justify-content-around align-items-center flex-wrap`}
//     >
//       {galleryElm}
//     </div>
//   );
// };

//// v3 user LazyLoding and skeletron
const RenderGallery = (props) => {
  const { numberOfGallery, isRenderGallery, scrollPosition } = props;
  console.log(`props`, props);
  const galleryElm = [];
  const galleryLength = imagesGallerys.length;
  for (let i = 0; i < numberOfGallery; i++) {
    const imageIndex = i % galleryLength;
    const elm = (
      <Card style={{ width: 300 }} key={`card-key-${i}`}>
        <LazyLoadImage
          delayTime={750}
          alt="Card image cap"
          width={318}
          height={180}
          src={`${imagesGallerys[imageIndex]}`}
          effect="blur"
          // placeholder={<Skeleton width={318} height={180} />}
        />
      </Card>
    );
    galleryElm.push(elm);
  }
  return (
    <div
      className={`d-flex flex-row  justify-content-around align-items-center flex-wrap`}
    >
      {galleryElm}
    </div>
  );
};

const Home = () => {
  // const [isRenderGallery, isSetRenderGallery] = useState(false);

  const cardImage = `/8k.jpg`;
  return (
    <div>
      {/* <Head>
        <title>This page has a title 🤔</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Mary's simple recipe for maple bacon donuts
           makes a sticky, sweet treat with just a hint
           of salt that you'll keep coming back for."
        ></meta>
      </Head> */}
      <Navbar className={"sticky-top"} color="primary" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
      </Navbar>
      <Container style={{ marginTop: 40, marginBottom: 32 }}>
        <Container fluid>
          <Jumbotron>
            <h1 className="display-3">Hello, world!</h1>
            <p className="lead">
              This is a simple hero unit, a simple Jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <hr className="my-2" />
            <p>
              It uses utility classes for typography and spacing to space
              content out within the larger container.
            </p>
            <p className="lead">
              <Button style={{ color: "#f8f9fa" }} color="success">
                Learn More
              </Button>
            </p>
          </Jumbotron>
        </Container>

        <Container fluid>
          <h2 className="display-4">Header 2!</h2>
          <Row style={{ margin: 8 }}>
            <Col>
              <Card>
                <CardImg
                  top
                  width={318}
                  height={180}
                  src={cardImage}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg
                  top
                  // height="100%"
                  width={318}
                  height={180}
                  src={cardImage}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg
                  // height="100%"
                  width={318}
                  height={180}
                  top
                  src={cardImage}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row style={{ margin: 8 }}>
            <Col>
              <Card>
                <CardImg
                  top
                  width={318}
                  height={180}
                  src={cardImage}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg
                  top
                  // height="100%"
                  width={318}
                  height={180}
                  src={cardImage}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg
                  // height="100%"
                  width={318}
                  height={180}
                  top
                  src={cardImage}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* <Container fluid>
          <h2 className="display-4">Gallery</h2>

          {!isRenderGallery && (
            <Waypoint
              topOffset={200}
              onEnter={() => {
                isSetRenderGallery(true);
                console.info(`enter gallery section`);
              }}
            />
          )}

          <div
            className={`d-flex flex-row  justify-content-around align-items-center flex-wrap`}
          >
            <RenderGallery
              numberOfGallery={15}
              // isRenderGallery={isRenderGallery}
            />
          </div>
        </Container> */}
      </Container>
    </div>
  );
};

Home.getInitialProps = async (ctx) => {
  try {
    // await delay(5000);
    return { data: "data" };
  } catch (err) {
    return { data: "data" };
  }
};

export default Home;

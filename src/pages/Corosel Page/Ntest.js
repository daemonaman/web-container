import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel";
// import './App.css';
// import Card from './Card.js'
// import data from "./NtestData";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./Ntest.css";
const NtestData = [
  {
    id: 1,
    image:
      "https://s3-alpha-sig.figma.com/img/dbc3/9f5a/6921ae79360fa9f850e89652839b96f6?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K-5MTYdwtTDJ~OrulAjRKfOo-puMMFt8Ar8UVxLxf59uPGt5op-eTQ4xaVwDuVKpUmR8iaiKhjxVWBSTWaWF8YGN70K7lDaSUD1tOqdUdLc~rR5vGClaANKKjuM8DhAaO3cFM8CuuVflXz7aSVNbp5MLnYQCb30ZA1RcjsQX~YgSo82~cnpE2f6Rsgs1~3-tJJsPZZdbS1yIeoyYRMiNnkSKLyMBRRDWKwpA8EggPJ9C1z~u433SZgUBnz-o5fI4Yc~SsA1MocQFNA6yc6JuZywoDALxMhfH2pGodnsUH9uyUDegzoPoZnYG2O9pO0JmWARWyUuRaAc3StetrjPc3w__",
    off: "Up to 35% off",
    deals: "Deals of the Day",
    title: "Super Saver Deals on Luvlap Product",
    price: "100/-",
  },
  {
    id: 2,
    image:
      "https://s3-alpha-sig.figma.com/img/7cdc/ab9c/200e50426bc696264e3390b30f0c4c50?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gr1Glc6jwdFToN-4amvoQgMmSfx~JagKhWy2MTYpO7LTbKjOyZECwZvaCclJvbEH7p33~qgeSZ3L77idK4r8ktMSeTh1YXRUwJkcBu7Z7taWm5R8NF4OCc6Vh5zKReXuAHNOWrbT~i0EFhIbHOBqLu-8KN7KFS2-qYTqHNqv-iJojZG8aIYT~4SZGZgHzLEL8DlSfTuJ4TJjrp5WhiSQdaFHxnXLsJi6MdKevqGeaBq4hQ9QJaLvV0ZiVzqzGyegjJ-LyT3Z5vnEIOHO6Ui-q8fkVJiLVYot2CeAYraVmuQDy7sFtGvZZBwAPf4N2GAnq~wbQ8VXAVGWnE8uOHtEeQ__",
    off: "Up to 54% off",
    deals: "Deals of the Day",
    title: "Super Value Deals on Baby Products",
    price: "150/-",
  },
  {
    id: 3,
    image:
      "https://s3-alpha-sig.figma.com/img/d027/2b1b/67a2a8e7b147b9f65a85932b91da55c6?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GPXWyqE9Z~jhWon~N6eVaz344DC87TaJBT2aFKSj0PAdsUBNQNeDcOYtFRUzgJUtTXHAYXHvJUiqONBOgrAVaMNmFLNiEaoDWdFBjswr21qHhI57WnDUPOdwI~xkn1oWekaFyC18l53fYCyJ~McEzRGW0dSx9g-5JAAi1bb9bT4axqPfsgNhW6h5xuI9QvCxYWVm0JNxkAtD~lLKS~5NgSao9q6fosnmvs3iEITmJlB8mvLr1B2mrfTj71wm5uZbHqG078mSMHM~8nUgZxz~r1~SclE1a9cgh1G516timXPNnHxKTq1LW~v9BaQbzplZTQ5D8qwJLCwUYQbSN-C6FQ__",
    off: "Up to 60% off",
    deals: "Deals of the Day",
    title: "Super Value Deals On Baby Bedding & Essentials",
    price: "300/-",
  },
  {
    id: 4,
    image:
      "https://s3-alpha-sig.figma.com/img/a0ad/0e4e/6c69061fc2c6b6f2adfaed2bfdd3befe?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rv5VFi7fZPjMc4S9myUKxkaCKC2f1uElZYHD7fkvriY2bvqgKBM3~7doY2V2tu6rTSDGhP3Onqn~ExyRWDOXtSqjnFYzNoRQFxbiKSiQD45YLja3ozl9JkXUMsEDJo0seqfonDWuRykUZP02tfIPKSYdBcUxGOjDXlrTGsJr-qpSsUBLN7F0k0TeKIcx0qcm6KJdKGr16XC9t1eOI8dCwEgu7y9FsaULjZZ~t965d81E6yZwno35mE7KmGhbGMy6Y7ppjKvbLcUHOOhhQmZyPqPEonR~BYisU4qBfiywnJCcsKkxatRsCBLXH4qe~7wcedNHBQmBrX~wITS3AWILfQ__",
    off: "Up to 35% off",
    deals: "Deals of the Day",
    title: "Super Value Deals On Baby Diapers & Wipes",
    price: "340/-",
  },
  {
    id: 5,
    image:
      "https://s3-alpha-sig.figma.com/img/a0ad/0e4e/6c69061fc2c6b6f2adfaed2bfdd3befe?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rv5VFi7fZPjMc4S9myUKxkaCKC2f1uElZYHD7fkvriY2bvqgKBM3~7doY2V2tu6rTSDGhP3Onqn~ExyRWDOXtSqjnFYzNoRQFxbiKSiQD45YLja3ozl9JkXUMsEDJo0seqfonDWuRykUZP02tfIPKSYdBcUxGOjDXlrTGsJr-qpSsUBLN7F0k0TeKIcx0qcm6KJdKGr16XC9t1eOI8dCwEgu7y9FsaULjZZ~t965d81E6yZwno35mE7KmGhbGMy6Y7ppjKvbLcUHOOhhQmZyPqPEonR~BYisU4qBfiywnJCcsKkxatRsCBLXH4qe~7wcedNHBQmBrX~wITS3AWILfQ__",
    off: "Up to 35% off",
    deals: "Deals of the Day",
    title: "Super Value Deals On Baby Diapers & Wipes",
    price: "600/-",
  },
];

function NcorouselPage() {
  return (
    <>
      <div className="dealcards">
        <div className="owl_head">
          <h2>Deals on baby care</h2>
        </div>

        <OwlCarousel
          mouseDrag={false}
          loop={true}
          touchDrag={false}
          lazyLoad={true}
          items={4}
          slideBy={1}
          nav={true}
          responsive={{
            1450: {
              items: 4,
              slideBy: 1,
            },
            1250: {
              items: 4,
              slideBy: 1,
            },
            1100: {
              items: 4,
              slideBy: 1,
            },
            900: {
              items: 2,
              slideBy: 1,
            },
            540: {
              items: 1,
              slideBy: 1,
            },
          }}
          dots={true}
          autoplay={true}
          autoplayTimeout={3000}
          animateIn="fadeIn"
          autoplayHoverPause={false}
        >
          {NtestData.map((d) => (
            <Card key={d.id} sx={{ maxWidth:' 30vw '}}>
              <CardMedia
                component="img"
               
                alt="carousel"
                src={d.image}
                className="owl_corosel_image_under"
              />
              <CardActions>
                <Button
                  variant="contained"
                  disableElevation
                  sx={{ background: "#AC0000" }}
                >
                  {d.off}
                </Button>
                <Button size="small" style={{ color: "#AC0000" }}>
                  {d.deals}
                </Button>
              </CardActions>
              <CardContent>
                <Typography
                  variant="body2"
                  sx={{ color: "#0B0B0B", fontSize: "18px", fontWeight: "400" }}
                >
                  {d.title.split(30)}.....
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#0B0B0B",
                    fontSize: "18px",
                    fontWeight: "400",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  {d.price}
                  <Button
                    style={{ backgroundColor: "#02a6a2", color: "white" }}
                  >
                    Buy Now
                  </Button>
                </Typography>
              </CardContent>
            </Card>
          ))}
        </OwlCarousel>
      </div>
    </>
  );
}

export default NcorouselPage;

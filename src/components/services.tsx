import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import ServiceCard from "./service-card"
import Bar from "./bar"

const Services = props => {
  let services = [
    {
      id: 1,
      image: "gps.png",
      title: "Global Coverage",
      description:
        "With global coverage and unlimited range, you can find your items from anywhere in the world.",
    },
    {
      id: 2,
      image: "creditcard.png",
      title: "Starting from $0/month",
      description:
        "No more expensive hidden or monthly fees, and only pay for what you use.",
    },
    {
      id: 3,
      image: "battery.png",
      title: "Long Battery Life",
      description:
        "With weeks to months of battery life, Trackversal can keep working to protect your belongings, 24/7.",
    },
    {
      id: 4,
      image: "lock.png",
      title: "Hardware-backed Security",
      attribution: '<div><div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>',
      description: "With local millitary grade encryption, not even us have the ability to access your data.",
    },
    
    {
      id: 5,
      image: "bluetooth.png",
      title: "Bluetooth 5.0 LE",
      attribution: '<div>Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>',
      description:
        "Using the power of your phone's onboard sensors, the battery life is significantly enhanced.",
    },
    {
      id: 6,
      image: "lte.png",
      title: "LTE CAT-M",
      attribution: '<div>Icons made by <a href="https://www.flaticon.com/authors/payungkead" title="Payungkead">Payungkead</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>',
      description: "When the device is lost, it sends a beacon home via LTE CAT-M, anywhere in the world.",
    },
    {
      id: 7,
      image: "satellite.png",
      title: "GPS, GLONASS, Galileo, Beidou",
      attribution: '<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>',
      description: "The device leverages powerful geopositioning satellites to guarantee location accuracy.",
    },
    {
      id: 8,
      image: "radar.png",
      title: "Wifi",
      attribution: '<div>Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>',
      description:
        "With Wi-Fi geopositioning, your local wifi access points just turned into location beacons!",
    },
  ]

  return (
    <Grid
      container
      spacing={3}
      style={{
        textAlign: "center",
        minHeight: 200,
        padding: 10,
      }}
      id={props.id}
    >
      <Grid
        item
        xs={12}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography variant="h4">Features</Typography>
        <Bar />
        <Typography variant="subtitle1" style={{ margin: 30 }}>
          Trackversal seamlessly switches between Bluetooth, Wifi, and GPS to ensure more accurate and efficient tracking information.
        </Typography>
      </Grid>

      {services.map(service => (
        <Grid item xs={12} sm={4} key={service.id}>
          <ServiceCard service={service} />
        </Grid>
      ))}

      {/* <Grid item xs={12}>
        <Button variant="contained" color="primary" size="large">
          Learn More
        </Button>
      </Grid> */}
    </Grid>
  )
}
export default Services

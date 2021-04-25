import React, {useState} from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import FormControl from '@material-ui/core/FormControl';
import Image from "./image"
import Hidden from "@material-ui/core/Hidden"
import Bar from "./bar"
import addToMailchimp from 'gatsby-plugin-mailchimp';

const NewsletterPanel: React.FunctionComponent<{}> = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addToMailchimp(email)
      .then((data) => {
        // alert(data.result);
        console.log(JSON.stringify(data))
        console.log(document.getElementById('subscribeResult'));
        if (data.result == "success") {
          // alert("Thanks for subscribing!");
          document.getElementById('subscribeResult').innerText="You are now subscribed!";
        }
        else {
          // alert("ERR: " + JSON.stringify(data));
          document.getElementById('subscribeResult').innerHTML=data.msg;
        }
      })
      .catch((error: Error) => {
        // Errors in here are client side
        // Mailchimp always returns a 200
        document.getElementById('subscribeResult').innerHTML=JSON.stringify(error);
      });
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  return (
    <Grid container spacing={3} style={{ minHeight: 250 }}>
        <Grid
          item={true}
          sm={6}
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
          style={{ padding: 10 }}
        >
          <div style={{ width: "100%" }}>
            {/* <Image
              alt="The Team"
              filename="about-illustration.png"
            /> */}

        <Typography variant="h5" color="inherit">
          Enter your email address to reserve your spot as one of the first to try out Trackversal!
        </Typography>
        <Bar />
        {/* <Typography
          variant="subtitle1"
          style={{ marginBottom: 30, marginTop: 20 }}
        >
          We strive to create 
        </Typography> */}
        {/* <Button variant="outlined" color="primary" size="large">
          Learn More
        </Button> */}
            
          </div>
        </Grid>
      <Grid
        item={true}
        xs={12}
        sm={6}
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
        style={{ paddingLeft: 40, paddingRight: 40 }}
      >
        {/* <Typography variant="h4" color="inherit">
          Sign up to be notified of development progress!
        </Typography>
        <Bar />
        <Typography
          variant="subtitle1"
          style={{ marginBottom: 30, marginTop: 20 }}
        >
          We strive to create 
        </Typography>
        <Button variant="outlined" color="primary" size="large">
          Learn More
        </Button> */}

            <form onSubmit={handleSubmit}>
              {/* <h2>Subscribe to my email list!</h2> */}
              <FormControl>
              <div style={{ width:'100%', display: 'flex', alignItems: 'center' }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  placeholder="Email address"
                  name="email"
                  type="text"
                  onChange={handleEmailChange}
                />
                {/* <button type="submit">Subscribe</button> */}
                <Button type="submit" variant="contained" color="primary" size="large" style={{marginLeft: 20}}>
                  Subscribe
                </Button>
                <Typography
                  variant="subtitle1"
                  id="subscribeResult"
                  style={{ marginBottom: 30, marginTop: 20 }}
                >
                  
                </Typography>
              </div>
              </FormControl>
            </form>

      </Grid>
    </Grid>
  )
}
export default NewsletterPanel

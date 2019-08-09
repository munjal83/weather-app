import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
        margin: '0 300px 20px 300px',
        padding: 20,
    } 
}

class WeatherCard extends React.Component {


render() {
    return (
        <div>
            <Paper style={styles.root} elevation={3}>
                <Typography variant="display1" component="h3" align="center" gutterBottom>
                    Today's Weather
                        </Typography>
                <Typography variant="title" component="p" align="center" gutterBottom color="secondary">
                    City: {this.props.data.city}
                </Typography>
                <Typography variant="title" component="p" align="center" gutterBottom color="secondary">
                    Last Updated: {this.props.data.lastUpdated}
                </Typography>
                <Typography variant="title" component="p" align="center" gutterBottom color="secondary">
                    Feels Like: {this.props.data.feelsLike}°
                        </Typography>
                <Typography variant="title" component="p" align="center" gutterBottom color="secondary">
                    Temperature Unit: {this.props.data.unit}°
                        </Typography>
                <Typography variant="title" component="p" align="center" gutterBottom color="secondary">
                    Temperature: {this.props.data.temperature}°
                        </Typography>
            </Paper>
        </div>
    );
}
}

export default WeatherCard;
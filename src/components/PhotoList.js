import React, { Component } from 'react';
import { photos } from "../assets/photos";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const styles = {
    root: {
        width: '100%',
        maxWidth: 600,
        backgroundColor: "fff",
        margin: '0 auto',
        padding: 20,
    },
};

class PhotoList extends Component {
    constructor(props) {
        super(props);
        this.photoList = photos;
    }

    getPhotoList() {
        return this.photoList.map(photo => <div className="text-center"><a href={photo.src}><h3>{photo.name}</h3></a></div>);
    }

    render() {
        return (
            <div style={styles.root}>
                <Paper elevation={3}>
                    <List>
                        <Typography variant="display1" component="h3" align="center" gutterBottom>
                            Photo List
                        </Typography>
                        <ListItem>
                            <Typography variant="subheading" component="h4" align="left" gutterBottom>
                                {this.getPhotoList()}
                            </Typography>
                        </ListItem>
                    </List>
                </Paper>
            </div>
        );
    }
}

export default PhotoList;
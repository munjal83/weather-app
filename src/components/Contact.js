import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        maxWidth: 800,
        backgroundColor: "fff",
        margin: '0 auto',
        padding: 20,
    },
    formControl: {
        margin: 20,
    },
    button: {
        margin: 10,
    },
};

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div style={styles.container}>
                <Paper elevation={3}>
                    <Typography variant="display1" component="h3" align="center" gutterBottom>
                        Contact Us
                    </Typography>
                    <FormControl style={styles.formControl}>
                        <InputLabel htmlFor="name-simple">Name</InputLabel>
                        <Input name="name" value={this.state.name} onChange={this.handleChange} />
                    </FormControl>
                    <FormControl style={styles.formControl}>
                        <InputLabel htmlFor="phone-simple">Phone Number</InputLabel>
                        <Input name="phone" value={this.state.phone} onChange={this.handleChange} />
                    </FormControl>
                    <FormControl style={styles.formControl}>
                        <InputLabel htmlFor="email-simple">Email</InputLabel>
                        <Input name="email" value={this.state.email} onChange={this.handleChange} />
                    </FormControl>
                    <Button
                        variant="contained"
                        color="primary"
                        style={styles.button}
                        href="mailto:admin@example.com"
                    >
                        Contact Us
                    </Button>
                </Paper>
            </div>
        );
    }
}

export default Contact;
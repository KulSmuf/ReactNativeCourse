import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 3qaleTo8LvFZ4NjcNkuITyvB4wutfaDGjuRWbEjpPS4AiFxLZ2gNcUWwxQqWNl3TqgMR08OMeVW-wX0sQVQCRD_qL0tyzy3GXW33ECxerp8iMdLjp-nIzI5wImkiYHYx'
    }
});
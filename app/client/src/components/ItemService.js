import axios from 'axios';
import LogIn from './log_in';
class ItemService {

    sendData(data) {
        axios.post('http://localhost:8000/items/add/post/', {
            item: data
        })
            .then(res => this.setState({ items: res.data }))
            .catch(err => console.log(err))
    }

    updateData(data, id){
        axios.post('http://localhost:8000/items/update/'+id, {
            item: data
        })
            .then(res => this.setState({ items: res.data }))
            .catch(err => console.log(err))
    }

    deleteData(id){
        axios.get('http://localhost:8000/items/delete/'+id)
            .then().catch(err => console.log(err))
    }
    //
    // login(data) {
    //
    //     axios.post('http://localhost:8000/items/', {
    //         item: data
    //
    //     })
    //        .then(this.props.history.push('/user'))
    //         .catch(err => console.log(err))
    // }

}

export default ItemService;

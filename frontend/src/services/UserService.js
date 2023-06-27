import $auth from '../http';

export default class UserService{
    
    static fetchUser(){
        return $auth.get('/');
    }
}
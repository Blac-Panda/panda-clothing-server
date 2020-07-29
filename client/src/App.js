import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shop'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up'
import {auth, createUserProfileDocument, addCollectionAndDocuments} from './firebase/firebase.utils'
import {Switch, Route, Redirect} from 'react-router-dom'

import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user-actions'
import {selectCurrentUser} from './redux/user/user.selector'
import { fetchCollectionsStartAsync } from './redux/shop/shop.actions'
import {selectIsCollectionFetching} from './redux/shop/shop.selectors'
import {createStructuredSelector} from 'reselect'
import CheckoutPage from './pages/checkout/checkout'
import Contact from './pages/contact/contact'

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    const {fetchCollectionsStartAsync, setCurrentUser} = this.props;
    fetchCollectionsStartAsync()

    this.unsubscribeFromAuth =  
    auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            }
            ) 
          
        })

      }

      setCurrentUser(userAuth);
      // addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})))
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/signin" render={() => this.props.currentUser ? 
          (<Redirect to='/'/>) 
          : 
          <SignInAndSignUp/>} 
          />
      </Switch>
      <Footer/>
    </div>
  );}
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isCollectionFetching: selectIsCollectionFetching
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);

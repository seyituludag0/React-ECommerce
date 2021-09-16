import React from 'react'
import { Route } from 'react-router'
import { Grid } from 'semantic-ui-react'
import Categories from '../components/categories/Categories'
import Sock from '../components/sock/Sock'
import Home from "../layouts/home/Home"
// import NotFound from './404page/NotFound'

export default function Dashboard() {
    return (
        <div>
               <Grid>
        <Grid.Row>
          <Grid.Column>
              <Route exact path="/" component={Home} />
              <Route exact path="/socks" component={Sock} />
              <Route exact path="/categories" component={Categories} />


              {/* <Route exact path="*" component={NotFound} /> */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
        </div>
    )
}

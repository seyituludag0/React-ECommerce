import React from 'react'
import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'


export default function InstagramPosts() {
    return (
        <div>
            <section className="py-lg-5">
        {/* insta posts */}
        <h5 className="head_agileinfo text-center text-capitalize pb-5">
          <span>I</span>nstagram Gönderilerimiz</h5>
           <InstagramFeed
     token="IGQVJYeFdUWkhxRnRDVDVwS0RTRU8yV3hGVlpHOGNfTUJtajFJdWd1VkM2Q1pnUzBYam5aQzRuRDYwSkpoQ1RHNmY0cTQ0NzFlU0hIVms4Q01MSmUwWXdtdmZANMHhHSFFRSms4T2pzOVpGT01PdExuQQZDZD"
      />  
      </section>
        </div>
    )
}

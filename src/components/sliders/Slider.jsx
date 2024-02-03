

import {useState,useEffect} from 'react';
import Test from './test/test.jsx'
const ARTICLES = [
    {
      title: "A message to our customers",
      upvotes: 12,
      date: "2020-01-24",
    },
    {
      title: "Alphabet earnings",
      upvotes: 22,
      date: "2019-11-23",
    },
    {
      title: "Artificial Mountains",
      upvotes: 2,
      date: "2019-11-22",
    },
    {
      title: "Scaling to 100k Users",
      upvotes: 72,
      date: "2019-01-21",
    },
    {
      title: "the Emu War",
      upvotes: 24,
      date: "2019-10-21",
    },
    {
      title: "What's SAP",
      upvotes: 1,
      date: "2019-11-21",
    },
    {
      title: "Simple text editor has 15k monthly users",
      upvotes: 7,
      date: "2010-12-31",
    },
  ];

import './slider.css'
export default function Slider () {
    const[articles,setArticles] = useState(ARTICLES)

    useEffect(()=> {
        sortbyUpVote();
    },[])
   
      const sortbyUpVote = () => {
        alert('clicked')
        const sortedArticles = [...articles].sort((a,b)=> a.upvotes - b.upvotes)
        setArticles(sortedArticles)
      }
      const sortbyDate = () => {
        const sortedArticles = [...articles].sort((a,b) => new Date(a.date)-new Date(b.date))
        setArticles(sortedArticles)
      }

    return (
        <div className = "container">       
        <div onClick = {sortbyUpVote}> onUPvote</div>
                 <div onClick = {sortbyDate}> onDate </div>
                <Test articles = {articles}> </Test>
        </div>
    
    )

}
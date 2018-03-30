---
layout: blog-post

title: "Loading Icon"
date:   2016-11-13 09:33:43
website: 'codepen'

image: /img/blog/svg/svg.png 

tech:
 - HTML /
 - Sass /
 - SVG 

screenshots:
---

<style type="text/css">
  	.portfolio .screenshots {
  		display: none;
  	}

.box {
	font-family: 'azo-sans-web', sans-serif;
  	box-sizing:border-box;
  	max-width: 500px;
  	width: 80%;
    /* height: 40%; */
    position: relative;
  	background:#B9EBFA;
    display: inline-block;
    overflow: hidden;
    margin: 0 auto;
    cursor: pointer;
    color: rgb(55,170,230);
    -webkit-transition: background 0.4s 0.5s;
    transition: background 0.4s 0.5s;
  	margin:10%;
  	padding:1em 2em 2em;
  
}

.box:hover {
    background: rgba(250,250,250,0);
  /* // background:#C7BEA7; */
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
}

.box h3 {
    /* // font-family: "Ruthie", cursive; */
    font-size: 10em;
    margin: 0;
    font-weight: 700;
    width: 100%;
    padding:0 0 0 5%;
  
}

.box span {
    display: block;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 2em;
    padding:0 0 1em 5%;
}

.box h3,
.box span {
    -webkit-transition: color 0.4s 0.5s;
    transition: color 0.4s 0.5s;
}

.box:hover h3,
.box:hover span {
    color: #615E3C;
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
}


.box svg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 99%;
    height: 99%;
    margin: 1%;
}

.box svg line {
    stroke-width: 5px;
    stroke: rgb(55,170,230);
  	stroke:#615E3C;

    position: absolute;
    fill: none;
    -webkit-transition: all 1s ease-in-out;
    transition: all 1s ease-in-out;
    top: 1em;
    left: 1em;
    bottom: 1em;
   	right: 1em;

}

.box svg line.top {
  transition: all 0.1s .1s ease;
}
.box svg line.right {
  transition: all 0.1s .2s ease;
}
.box svg line.bottom {
  transition: all 0.1s .3s ease;
}
.box svg line.left {
  transition: all 0.1s 0.4s ease;
}

.box:hover line {
  stroke:#615E3C;
}
.box:hover line.left {
    transition: all 0.05s 0.1s ease;
  }
.box:hover line.bottom {
    transition: all 0.05s 0.15s ease;
  }
.box:hover line.right {
    transition: all 0.05s 0.2s ease;
  }
.box:hover line.top {
    transition: all 0.05s 0.25s ease;
  }



.box:hover svg line.top {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
}

.box:hover svg line.bottom {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
}

.box:hover svg line.left {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
}

.box:hover svg line.right {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
}
</style>

<!-- ### SVG's! -->
<div class="box">
    <svg xmlns="http://www.w3.org/2000/svg">
        <line class="top" x1="100%" x2="200%" />
        <line class="left" y1="0" y2="-100%" />
        <line class="bottom" x1="0" x2="-100%"  y1="100%" y2="100%"/>
        <line class="right" y1="100%" y2="200%" x1="100%" x2="100%"/>
    </svg>
    <h3>D</h3>
    <span>2012</span>
    <span>Broccoli, Asparagus, Curry</span>
</div>








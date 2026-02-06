import"../chunks/DsnmJJEf.js";import"../chunks/69_IOA4Y.js";import{f as x,a as w,s as t,c as e,r as a,n as f}from"../chunks/sTE9ERBI.js";import{s}from"../chunks/CGueqGAg.js";var b=x(`<main><h1>Photoapp</h1> <h2>Denna sida innehåller fina bilder</h2> <div class="photos"><div class="image-wrapper"><img alt="Flexbox egenskaper"/></div> <div class="image-wrapper"><img alt="flexbox egenskaper"/></div> <div class="image-wrapper"><img alt="Flexbox egenskaper"/></div></div> <style>.photos{
        display:flex;
        max-width 90vw;
        overflow:hidden;
        align-items:center;
        justify-content:center; 
        flex-wrap: wrap;
        background-color: Green;
    }
    
    .image-wrapper{
        width:100%
        flex-grow:1;
        margin:10px;
        flex-basis:400px
        
    }
    
    h1{
        text-align: center;
        font-size: 50px;
        margin: 20px;
        color: Green;
}
    
    .image-wrapper img{ width: 100%; }
    .image-wrapper:hover { flex-grow:2; }
    .image-wrapper:active { transform: scale(0.9); }
    .image-wrapper img{ border-radius: 20px; }
    .image-wrapper img{ box-shadow: 4px 8px 10px rgba(0,0,0,0.2); }</style></main>`);function F(n){let l="https://picsum.photos/id/70/367/267",g="https://picsum.photos/id/88/367/267",d="https://picsum.photos/id/93/367/267";var r=b(),o=t(e(r),4),i=e(o),v=e(i);s(v,"src",l),a(i);var p=t(i,2),c=e(p);s(c,"src",g),a(p);var m=t(p,2),h=e(m);s(h,"src",d),a(m),a(o),f(2),a(r),w(n,r)}export{F as component};

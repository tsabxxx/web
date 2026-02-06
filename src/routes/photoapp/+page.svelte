<script>
    let image = "https://picsum.photos/id/70/367/267"
    let photo = "https://picsum.photos/id/88/367/267"
    let picture = "https://picsum.photos/id/93/367/267"
</script>


<main>
    <h1> Photoapp</h1>
    <h2> Denna sida innehåller fina bilder</h2>

 <div class="photos">
    <div class="image-wrapper">
    <img src={image} alt="Flexbox egenskaper">
    </div>
    <div class="image-wrapper">

    <img src={photo} alt="flexbox egenskaper">
    </div>
    <div class="image-wrapper">

    <img src={picture} alt="Flexbox egenskaper">
    </div>

 </div>
 <style>
    .photos{
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
    .image-wrapper img{ box-shadow: 4px 8px 10px rgba(0,0,0,0.2); }

    
</style>    
 </main>
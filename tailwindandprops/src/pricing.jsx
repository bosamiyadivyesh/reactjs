function Price({hedingTxt,liText}){
    return(
      <>
   <section class="py-12 bg-gray-100">
  <div class="max-w-6xl mx-auto px-4">
    
    <h2 class="text-3xl font-bold text-center mb-8">
      Our Services
    </h2>

    <div class="grid md:grid-cols-3 gap-6">

    
      <div class="bg-white p-6 rounded-xl shadow-md">
        <h3 class="text-xl font-semibold mb-3">
      {hedingTxt}
        </h3>

        <ul class="list-disc list-inside text-gray-600 space-y-1">
          {liText.map((text,key
           )=>(
              <>
      
                <li key={key}>{text}</li>
       
              </ >
               ))}
       </ul>
  
        <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
         {hedingTxt}
        </button>
      </div>

     
      <div class="bg-white p-6 rounded-xl shadow-md">
        <h3 class="text-xl font-semibold mb-3">
         {hedingTxt}
        </h3>

        <ul class="list-disc list-inside text-gray-600 space-y-1">
          {liText.map((text,key
           )=>(
              <>
      
                <li key={key}>{text}</li>
       
              </ >
               ))}
       </ul>

        <button class="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg">
          {hedingTxt}
        </button>
      </div>


      <div class="bg-white p-6 rounded-xl shadow-md">
        <h3 class="text-xl font-semibold mb-3">
          {hedingTxt}
        </h3>
          <ul class="list-disc list-inside text-gray-600 space-y-1">
          {liText.map((text,key
           )=>(
              <>
      
                <li key={key}>{text}</li>
       
              </ >
               ))}
       </ul>


        <button class="mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg">
          {hedingTxt}
        </button>
      </div>

    </div>

  </div>
</section>  
      </>
    )
}
export default Price


function Stats() {

const items=[

{
number:"12K",
title:"Global Clients"
},

{
number:"55%",
title:"Annual Growth"
},

{
number:"5K",
title:"No of Projects"
},

{
number:"80%",
title:"Positive Ratings"
}

]

return(

<section className="py-24 bg-[#F8FAFC]">

<div className="max-w-7xl mx-auto px-6">

{/* Heading */}

<div className="text-center max-w-3xl mx-auto mb-16">

<p className="
text-orange-400
font-semibold
uppercase
tracking-[4px]
mb-4">

Our Strategy

</p>


<h1 className="
text-3xl
md:text-3xl
font-extrabold
text-[#0F172A]
leading-tight
animate-pulse">

Our Business Strategy Has Helped
Many Businesses Across The Globe

</h1>


<p className="
text-gray-500
mt-6
leading-8
text-lg">

Lorem ipsum dolor sit amet consectetur.
Elementum nisl duis tortor sed.
Suspendisse lobortis vitae quis vehicula
pellentesque sit id.

</p>

</div>


{/* Cards */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

{
items.map((x,index)=>(

<div
key={index}

className="
bg-white
rounded-[30px]
shadow-lg
p-7
text-center
hover:-translate-y-4
hover:shadow-2xl
duration-500
group">

<div className="mb-4">

<div className="
w-16
h-16
mx-auto
rounded-full
bg-orange-100
flex
items-center
justify-center
group-hover:bg-[#1E3A8A]
duration-500">

<span className="
text-2xl
font-bold
text-orange-400
group-hover:text-white">

★

</span>

</div>

</div>


<h2 className="
text-4xl
font-extrabold
text-[#1E3A8A]">

{x.number}

</h2>


<p className="
text-gray-500
font-medium
mt-3">

{x.title}

</p>

</div>

))
}

</div>



{/* Hero Slider */}

<div className="
mt-24
relative
overflow-hidden
rounded-[40px]
shadow-2xl">

<div className="animate-slider flex">

<img
src="/images/slide1.png"
alt=""
className="min-w-full h-[350px] md:h-[450px] object-cover object-center"
/>

<img
src="/images/slide2.png"
alt=""
className="min-w-full h-[350px] md:h-[450px] object-cover object-center"
/>

<img
src="/images/slide3.png"
alt=""
className="min-w-full h-[350px] md:h-[450px] object-cover object-center"
/>

<img
src="/images/slide1.png"
alt=""
className="min-w-full h-[350px] md:h-[450px] object-cover object-center"
/>

</div>



<div className="
absolute
inset-0
bg-black/40
flex
items-center
justify-center">

<div className="text-center px-6">

<p className="
uppercase
tracking-[5px]
text-orange-300
mb-4">

Business Growth

</p>

<h2 className="
text-3xl
md:text-6xl
font-extrabold
text-white">

Build Better Experiences

</h2>

<p className="
text-white/80
mt-5
max-w-xl
mx-auto">

Create modern digital products with strategy,
design and innovation.

</p>

<button className="
mt-8
bg-orange-400
px-8
py-4
rounded-full
font-semibold
text-white
hover:bg-[#1E3A8A]
duration-500">

Explore More

</button>

</div>

</div>

</div>



{/* Partners */}

<div className="mt-24">

  <p className="
  text-center
  text-orange-400
  uppercase
  font-semibold
  tracking-[4px]
  mb-3">

    Our Partners

  </p>

  <h2 className="
  text-center
  text-4xl
  font-bold
  text-[#0F172A]
  mb-12">

    Trusted By Leading Companies

  </h2>


  <div className="
  grid
  grid-cols-2
  md:grid-cols-4
  gap-6">

    <img
      src="/images/p1.png"
      className="
      h-20
      w-full
      object-contain
      p-4
      bg-white
      rounded-xl
      shadow-sm
      hover:scale-105
      duration-500"
    />

    <img
      src="/images/p2.png"
      className="
      h-20
      w-full
      object-contain
      p-4
      bg-white
      rounded-xl
      shadow-sm
      hover:scale-105
      duration-500"
    />

    <img
      src="/images/p3.png"
      className="
      h-20
      w-full
      object-contain
      p-4
      bg-white
      rounded-xl
      shadow-sm
      hover:scale-105
      duration-500"
    />

    <img
      src="/images/p4.png"
      className="
      h-20
      w-full
      object-contain
      p-4
      bg-white
      rounded-xl
      shadow-sm
      hover:scale-105
      duration-500"
    />

  </div>

</div>

</div>

</section>

)

}

export default Stats
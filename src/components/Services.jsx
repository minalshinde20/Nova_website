function Services(){

const cards=[

{
img:"/images/blog1.png",
title:"Creative Design",
desc:"Modern layouts and user-focused experiences designed for business growth."
},

{
img:"/images/blog2.png",
title:"Business Strategy",
desc:"Powerful strategies and digital solutions to improve your online presence."
},

{
img:"/images/blog3.jpeg",
title:"Development Ideas",
desc:"Creative product development with modern technologies and innovation."
}

]

return(

<section className="py-4 bg-white">

<div className="max-w-7xl mx-auto px-6">


<div className="
text-center
animate-[fadeIn_1s_ease]">

<p className="
text-orange-400
font-semibold
uppercase
tracking-[4px]
mb-3">

Latest News

</p>


<h1 className="
text-4xl
md:text-5xl
font-bold
text-[#0F172A]">

Latest Blog

</h1>


<p className="
text-gray-500
max-w-2xl
mx-auto
mt-5
leading-8">

Explore business insights, creative strategies and
modern digital experiences from our latest articles.

</p>

</div>



<div className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
gap-8
mt-14">

{
cards.map((x,index)=>(

<div
key={index}

className="
relative
overflow-hidden

bg-white
rounded-[30px]

shadow-lg

hover:-translate-y-5
hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]

duration-700

group">

{/* top line */}

<div className="
absolute
top-0
left-0

w-full
h-1

bg-gradient-to-r
from-orange-400
to-[#1E3A8A]
"></div>


<div className="overflow-hidden">

<img
src={x.img}
alt=""
className="
h-60
w-full
object-cover

group-hover:scale-110

duration-700"
/>

</div>


<div className="p-6">

<h2 className="
font-bold
text-2xl
text-[#0F172A]
group-hover:text-[#1E3A8A]
duration-500">

{x.title}

</h2>


<p className="
text-gray-500
mt-4
leading-7">

{x.desc}

</p>


<button className="
mt-5

text-orange-400
font-semibold

group-hover:translate-x-3

duration-500">

Learn More →

</button>

</div>

</div>

))
}

</div>


<div className="text-center mt-14">

<button className="
bg-[#1E3A8A]
text-white

px-8
py-4

rounded-full

font-semibold

hover:bg-orange-400
hover:scale-110

shadow-lg

duration-500">

View More Blogs

</button>

</div>

</div>

</section>

)

}

export default Services
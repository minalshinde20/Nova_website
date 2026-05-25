function Testimonials(){

const reviews=[

{
img:"/images/client1.jpg",

name:"John Anderson",

role:"Product Manager",

review:
"Working with this team was an amazing experience. The interface was modern, responsive and exceeded our expectations."
},

{
img:"/images/client2.jpeg",

name:"Sarah Wilson",

role:"UI Designer",

review:
"Very smooth user experience with beautiful animations and pixel-perfect design. Highly recommended."
}

]

return(

<section className="
py-24
bg-gradient-to-b
from-[#F8FAFC]
to-orange-50">

<div className="
max-w-7xl
mx-auto
px-6">


{/* heading */}

<div className="
text-center
animate-[fadeIn_1s_ease]">

<p className="
text-orange-400
font-semibold
uppercase
tracking-[4px]
mb-3">

Testimonials

</p>


<h1 className="
text-4xl
md:text-5xl
font-extrabold
text-[#0F172A]">

Our Happy Clients

</h1>


<p className="
text-gray-500
mt-5
max-w-2xl
mx-auto
leading-8">

Real feedback from businesses that trusted our
creative solutions and digital experiences.

</p>

</div>



<div className="
grid
grid-cols-1
md:grid-cols-2
gap-8
mt-16">

{
reviews.map((item,index)=>(

<div
key={index}

className="

relative
overflow-hidden

bg-white

rounded-[35px]

p-8

shadow-xl

hover:-translate-y-5
hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]

duration-700

group

">

{/* top glow */}

<div className="
absolute
top-0
left-0

w-full
h-2

bg-gradient-to-r
from-orange-400
to-[#1E3A8A]
"></div>


<div className="
flex
items-center
gap-4">

<img
src={item.img}
alt=""
className="
w-20
h-20

rounded-full

object-cover

border-4
border-orange-100

group-hover:scale-110
group-hover:border-[#1E3A8A]

duration-500"
/>


<div>

<h3 className="
font-bold
text-2xl
text-[#0F172A]">

{item.name}

</h3>

<p className="
text-orange-400
font-medium">

{item.role}

</p>

</div>

</div>



<div className="
text-orange-400
text-2xl
mt-6
tracking-wider">

★★★★★

</div>


<p className="
text-gray-500
leading-8
mt-6
italic">

"{item.review}"

</p>



<div className="
absolute
right-8
bottom-6

text-[90px]

font-bold

text-orange-100

group-hover:text-[#dbe6ff]

duration-500">

❞

</div>

</div>

))
}

</div>

</div>

</section>

)

}

export default Testimonials
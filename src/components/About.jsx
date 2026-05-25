function About() {

const trustPoints = [
{
title:"Trusted by Global Clients",
desc:"We have built strong relationships with businesses through quality and consistency."
},
{
title:"High Quality Experience",
desc:"Pixel-perfect interfaces designed with usability and modern trends."
},
{
title:"Fast & Responsive",
desc:"Optimized responsive layouts that perform smoothly across all devices."
},
{
title:"Dedicated Support",
desc:"Our team focuses on long-term collaboration and client satisfaction."
}
]

return(

<section className="bg-white py-20">

<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">


{/* left image layout */}

<div className="grid grid-cols-2 gap-4">

<div className="space-y-4">

<img
src="/images/about1.jpeg"
alt=""
className="
h-[360px]
w-full
object-cover
rounded-[30px]
shadow-xl
hover:scale-105
hover:-translate-y-2
duration-700"
/>

<img
src="/images/about2.jpeg"
alt=""
className="
h-[160px]
w-full
object-cover
rounded-[30px]
shadow-xl
hover:scale-105
hover:-translate-y-2
duration-700"
/>

</div>


<div className="space-y-4 mt-8">

<img
src="/images/about3.jpeg"
alt=""
className="
h-[170px]
w-full
object-cover
rounded-[30px]
shadow-xl
hover:scale-105
hover:-translate-y-2
duration-700"
/>

<img
src="/images/about4.jpeg"
alt=""
className="
h-[390px]
w-full
object-cover
rounded-[30px]
shadow-xl
hover:scale-105
hover:-translate-y-2
duration-700"
/>

</div>

</div>



{/* right content */}

<div className="animate-[fadeIn_1s_ease]">

<p className="text-orange-400 font-semibold uppercase tracking-widest">

Why Clients Choose Us

</p>


<h2 className="text-5xl font-bold text-[#0F172A] mt-3 leading-tight">

Why Our Clients
Trust Us

</h2>


<p className="text-gray-500 mt-5 leading-8">

We create meaningful digital experiences with modern design principles, user-focused interfaces and long-term reliability.

</p>


<div className="mt-8 space-y-4">

{
trustPoints.map((item,index)=>(

<div
key={index}

className="
flex
gap-4
bg-slate-50
p-5
rounded-2xl
shadow-sm
hover:shadow-xl
hover:-translate-y-2
duration-500
">

<div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-xl shrink-0">

✓

</div>


<div>

<h3 className="font-bold text-lg text-[#0F172A]">

{item.title}

</h3>

<p className="text-gray-500 mt-1">

{item.desc}

</p>

</div>

</div>

))
}

</div>


<button className="
bg-[#1E3A8A]
text-white
px-7
py-4
rounded-full
mt-8
hover:bg-orange-400
hover:scale-105
duration-500
">

Learn More

</button>

</div>

</div>

</section>

)

}

export default About
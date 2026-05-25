import { useState } from "react"

function CTA(){

const [open,setOpen]=useState(0)

const faq=[

{
question:"How long does a project take?",

answer:
"Project timelines depend on requirements, but most modern UI projects are completed within a few weeks."
},

{
question:"Do you create responsive designs?",

answer:
"Yes, all interfaces are optimized for desktop, tablet and mobile devices."
},

{
question:"Do you provide ongoing support?",

answer:
"We provide continuous support and maintenance to ensure long-term product quality."
}

]

return(

<section className="py-24 bg-[#F8FAFC]">

<div className="max-w-7xl mx-auto px-6">


{/* FAQ SECTION */}

<div className="
grid
md:grid-cols-2
gap-16
items-center">


{/* Left image */}

<div>

<img
src="/images/faq.avif"
alt="FAQ"
className="
w-full
rounded-[35px]
shadow-2xl
hover:scale-105
duration-500"
/>

</div>



{/* Right FAQ */}

<div>

<p className="
text-orange-400
font-semibold
uppercase
tracking-[4px]
mb-3">

FAQ

</p>


<h1 className="
text-4xl
md:text-5xl
font-bold
text-[#0F172A]
mb-10">

Frequently Asked Questions

</h1>


<div className="space-y-5">

{
faq.map((item,index)=>(

<div
key={index}

className="
bg-white
rounded-[25px]
shadow-md
overflow-hidden">

<button

onClick={()=>setOpen(
open===index ? null : index
)}

className="
w-full
p-6
flex
justify-between
items-center
font-semibold
text-left">

<span className="text-[#0F172A]">

{item.question}

</span>

<span className="
text-orange-400
text-2xl">

{open===index ? "−" : "+"}

</span>

</button>


<div className={`

px-6
overflow-hidden
duration-500

${open===index
? "max-h-40 pb-6"
: "max-h-0"}

`}>

<p className="
text-gray-500
leading-7">

{item.answer}

</p>

</div>

</div>

))
}

</div>

</div>

</div>



{/* NEED MORE INFO SECTION */}

<div className="
mt-24
rounded-[35px]
p-12
bg-[#0F172A]
flex
flex-col
md:flex-row
justify-between
items-center">

<div>

<h1 className="
text-4xl
text-white
font-bold">

Need More Info?

</h1>

<p className="
text-gray-300
mt-3
text-lg">

Write your concern to us and our specialists
will get back to you.

</p>

</div>


<button className="
mt-8
md:mt-0

bg-orange-400
px-8
py-4

rounded-full

text-white
font-semibold

hover:bg-white
hover:text-[#0F172A]

duration-500">

Contact Us

</button>

</div>

</div>

</section>

)

}

export default CTA
import {
FaInstagram,
FaTwitter,
FaFacebookF,
FaWhatsapp
}
from "react-icons/fa"

function Footer(){

return(

<footer className="
bg-[#0F172A]
pt-20
pb-10">

<div className="
max-w-7xl
mx-auto
px-6">

<div className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-5
gap-12">

{/* left section */}

<div>

<div className="
flex
items-center
gap-3">

<img
src="/images/logo.jpeg"
alt=""
className="
w-14
h-14
rounded-full
object-cover"
/>

<h1 className="
text-3xl
font-extrabold
text-white">

Nova

</h1>

</div>


<p className="
text-gray-300
leading-8
mt-6">

We create modern digital experiences
with creativity, strategy and innovation
for businesses around the world.

</p>

</div>



{/* company */}

<div>

<h2 className="
font-bold
text-xl
text-white
mb-6">

Company

</h2>

<ul className="
space-y-4
text-gray-300">

<li className="hover:text-orange-400 cursor-pointer duration-300">
About Us
</li>

<li className="hover:text-orange-400 cursor-pointer duration-300">
Services
</li>

<li className="hover:text-orange-400 cursor-pointer duration-300">
Careers
</li>

<li className="hover:text-orange-400 cursor-pointer duration-300">
Contact
</li>

</ul>

</div>



{/* resources */}

<div>

<h2 className="
font-bold
text-xl
text-white
mb-6">

Resources

</h2>

<ul className="
space-y-4
text-gray-300">

<li className="hover:text-orange-400 cursor-pointer duration-300">
Blog
</li>

<li className="hover:text-orange-400 cursor-pointer duration-300">
Help Center
</li>

<li className="hover:text-orange-400 cursor-pointer duration-300">
Support
</li>

<li className="hover:text-orange-400 cursor-pointer duration-300">
Documentation
</li>

</ul>

</div>



{/* quick links */}

<div>

<h2 className="
font-bold
text-xl
text-white
mb-6">

Quick Links

</h2>

<ul className="
space-y-4
text-gray-300">

<li className="hover:text-orange-400 cursor-pointer duration-300">
Home
</li>

<li className="hover:text-orange-400 cursor-pointer duration-300">
Features
</li>

<li className="hover:text-orange-400 cursor-pointer duration-300">
Testimonials
</li>

<li className="hover:text-orange-400 cursor-pointer duration-300">
FAQ
</li>

</ul>

</div>



{/* social */}

<div>

<h2 className="
font-bold
text-xl
text-white
mb-6">

Connect With Us

</h2>

<div className="
flex
gap-4">

<div className="
w-12
h-12
rounded-full

bg-[#1E293B]

flex
justify-center
items-center

text-orange-300

hover:bg-orange-400
hover:text-white

hover:-translate-y-2

duration-500

cursor-pointer">

<FaInstagram/>

</div>


<div className="
w-12
h-12
rounded-full

bg-[#1E293B]

flex
justify-center
items-center

text-orange-300

hover:bg-orange-400
hover:text-white

hover:-translate-y-2

duration-500

cursor-pointer">

<FaTwitter/>

</div>


<div className="
w-12
h-12
rounded-full

bg-[#1E293B]

flex
justify-center
items-center

text-orange-300

hover:bg-orange-400
hover:text-white

hover:-translate-y-2

duration-500

cursor-pointer">

<FaFacebookF/>

</div>


<div className="
w-12
h-12
rounded-full

bg-[#1E293B]

flex
justify-center
items-center

text-orange-300

hover:bg-orange-400
hover:text-white

hover:-translate-y-2

duration-500

cursor-pointer">

<FaWhatsapp/>

</div>

</div>

</div>

</div>



<div className="
border-t
border-white/10
mt-16
pt-8
text-center">

<p className="text-gray-300">

© 2026 Nova. All Rights Reserved.

</p>

</div>

</div>

</footer>

)

}

export default Footer
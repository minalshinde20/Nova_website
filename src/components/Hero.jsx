function Hero(){

return(

<section
className="
bg-cover
bg-center
bg-no-repeat"

style={{
backgroundImage:"url('/images/hero-bg.jpeg')"
}}
>

<div className="
max-w-7xl
mx-auto
px-6
py-24">

<div className="
grid
md:grid-cols-2
gap-10
items-center">

{/* left */}

<div>

<p className="
text-orange-400
font-semibold
tracking-[3px]">

WELCOME

</p>


<h1 className="
text-5xl
md:text-6xl
font-bold
leading-tight
text-white
mt-4">

Great Design Is
Invisible

</h1>


<p className="
text-white
mt-6
leading-8
max-w-lg">

Create beautiful experiences with smooth
interaction and responsive layouts.

</p>


<button className="
mt-8
bg-orange-400
px-8
py-4
rounded-full
text-white
font-semibold
hover:bg-[#5169ac]
hover:-translate-y-2
duration-500">

Start Now

</button>

</div>



{/* right image */}

<div>

<img
src="/images/hero-right.jpeg"
alt=""
className="
w-full
h-[450px]
object-cover
rounded-[35px]
shadow-2xl
hover:scale-105
duration-700"
/>

</div>

</div>

</div>

</section>

)

}

export default Hero
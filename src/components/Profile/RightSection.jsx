export function Rightsection(){
    return(
        <div className="order-1 flex items-center justify-center lg:order-3">
            <div className="relative h-72 w-72 lg:h-96 lg:w-96">

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl"></div>

              {/* Circle */}
              <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-2xl">
                <img
                  src="/ProfilePicture.png"
                  alt="Yesu Babu"
                  className="h-full w-full object-cover object-top"
                />
              </div>

            </div>
          </div> 
    )
}

export default Rightsection;
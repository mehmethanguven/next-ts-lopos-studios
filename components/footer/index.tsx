import { navLinks, socialIcons } from '@/data'
import Image from 'next/image'
import FooterNavItem from './FooterNavItem'
import SocialFooterItem from './SocialFooterItem'

export const Footer = () => {
  return (
    <footer className="bg-slate-700">
      {/* <!-- Container --> */}
      <div className="container mx-auto max-w-6xl py-10">
        {/* <!-- Footer Flex Container --> */}
        <div className="mb-8 flex flex-col items-center space-y-6 md:flex-row md:items-start md:justify-between md:space-y-0">
          {/* <!-- Menu & Logo Container --> */}
          <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
            {/* <!-- Logo --> */}
            <div className="h-8">
              <Image
                width={0}
                height={0}
                src="images/logo.svg"
                alt=""
                className="w-44 md:ml-3"
              />
            </div>
            {/* <!-- Menu Container --> */}
            <div className="flex flex-col items-center space-y-4 font-bold text-white md:ml-3 md:flex-row md:space-y-0 md:space-x-6">
              {/* <!-- Footer Nav Items --> */}
              {(navLinks || []).map((item, id) => (
                <FooterNavItem key={id} {...item} />
              ))}
            </div>
          </div>

          {/* <!-- Social & Copy Container --> */}
          <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
            {/* <!-- icons Container --> */}
            <div className="mx-auto flex items-center justify-center space-x-4 md:mx-0 md:justify-end">
              {/* <!-- Social Icons --> */}
              {(socialIcons || []).map((item, id) => (
                <SocialFooterItem key={id} {...item} />
              ))}
            </div>

            {/* <!-- Copy --> */}
            <div className="font-bold">
              &copy; 2022 Loopstudios. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

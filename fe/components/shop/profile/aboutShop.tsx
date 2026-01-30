import React, { useState } from 'react';

interface Shop {
  location: string;
  created_at: string;
}

interface AboutShopProps {
  shop: Shop;
}

export const AboutShop = ({ shop }: AboutShopProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
		<div>
			{/* --- ABOUT SECTION --- */}
			<div className="bg-[#fff4e6] rounded-2xl p-6 md:p-8 mb-20">
				<h2 className="text-2xl font-bold mb-9">About</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						{/* Member Since */}
						<p className="text-3xl font-semibold mb-5">Member Since</p>
						<p className="text-gray-600">{shop.created_at}</p>
					</div>
					<div>
						{/* Location */}
						<p className="text-3xl font-semibold mb-5">Location</p>
						<p className="text-gray-600">{shop.location}</p>
					</div>
					<div>
						{/* Response Rate */}
						<p className="text-3xl font-semibold mb-5">Response Rate</p>
						<p className="text-gray-600">98% within 24 hours</p>
					</div>
				</div>
			</div>
		</div>
  );
};
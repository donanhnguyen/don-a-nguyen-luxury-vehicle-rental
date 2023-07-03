import Image from 'next/image'

type VehicleListingProps = {
    name: string,
    price: number,
    imageUrl: any,
    capacity: number,
    type: string,
    unavailableDates: string[]
}

const VehicleListingCard: React.FC<{ vehicleListing: VehicleListingProps }> = ({
  vehicleListing,
}) => {
  return (
    <div className="border p-4 mb-4 rounded-lg shadow-lg hover:bg-gray-200">
      <div id='listingImage' className="mt-4 flex justify-center">
        <Image 
          alt={vehicleListing.name} 
          src={vehicleListing.imageUrl}
          width={300}
          height={300}
          className="rounded-md"
        />
      </div> 
      <div id='listingInfo' className="flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-2">{vehicleListing.name}</h3>
        <p className="text-gray-600">Capacity: {vehicleListing.capacity} people</p>
        <p className="text-gray-600">Type: {vehicleListing.type}</p> 
        <p className="bg-black text-yellow-500 text-xl font-roboto px-4 py-2 rounded-lg">${vehicleListing.price} per hour</p>
      </div>
    </div>
  );
};

export default VehicleListingCard;
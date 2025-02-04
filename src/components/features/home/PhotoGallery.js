"use-client";
import React from "react";

const photos = [
  { id: 1, src: "/images/photo1.jpg", alt: "Photo 1" },
  { id: 2, src: "/images/photo2.jpg", alt: "Photo 2" },
  { id: 3, src: "/images/photo3.jpg", alt: "Photo 3" },
  // Add more photos here
];

const PhotoGallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Photo Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>

   
    </div>
  );
};

export default PhotoGallery;


// <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

// <div className="lg:col-span-3">
//   {Object.entries(sectionNews).map(([section, news]) => (
//     <div key={section} className="mb-12">
//       <div className="flex items-center mb-6">
//         <h2 className="text-2xl font-bold">{section}</h2>
//         <div className="flex-grow mx-4 border-b-2 border-gray-200"></div>
//         <Button variant="outline" size="sm">
//           सबै हेर्नुहोस्
//         </Button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {news.map((item, index) => (
//           <Card
//             key={index}
//             className="hover:shadow-lg transition-shadow"
//           >
//             {item.image && (
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-48 object-cover"
//               />
//             )}
//             <CardHeader>
//               <CardTitle className="text-xl hover:text-blue-600 transition-colors">
//                 {item.title}
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-gray-600">{item.excerpt}</p>
//             </CardContent>
//             <CardFooter className="flex justify-between items-center">
//               <div className="flex items-center text-sm text-gray-500">
//                 <Clock className="h-4 w-4 mr-1" />
//                 <span>१० मिनेट अघि</span>
//               </div>
//               <Button variant="ghost" size="sm">
//                 थप पढ्नुहोस् →
//               </Button>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </div>
//   ))}
// </div>
// </div>

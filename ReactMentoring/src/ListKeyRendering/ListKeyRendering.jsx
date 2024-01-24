import React from "react";

const MyList = () => {
    const fruits = ['orange','banana','apple','mango', 'grapefruit', 'pear', 'kiwi', 'strawberry', 'blueberry', 'pineapple',
    'watermelon', 'melon', 'papaya', 'cherry', 'plum', 'apricot', 'fig', 'guava', 'grape',
    'lime', 'lemon', 'coconut', 'avocado', 'raspberry', 'blackberry', 'currant', 'date',
    'persimmon', 'nectarine', 'starfruit', 'pomegranate', 'passion fruit', 'dragonfruit',
    'durian', 'mangoesteen', 'rambutan', 'lychee', 'longan', 'mangosteen', 'kiwiberry',
    'pitaya', 'jujube', 'soursop', 'tamarind', 'jackfruit', 'guava', 'carambola', 'sapodilla',
    'kiwi', 'mulberry', 'loganberry', 'honeydew'];
return ( 
<ul>
{fruits.map((item,index)=>(
    <li key={index}>{item}</li>)
)}
</ul>
);
}
export default MyList;

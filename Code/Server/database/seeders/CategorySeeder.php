<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::create([
            'name' => "Programing",
            'description' => "Developers have to have some skills in a wide variety of coding niches",
            'image' => 'development.jpg',
        ]); 
        Category::create([
            'name' => "Self Development",
            'description' => "Personal development is a lifelong process. It is a way for people to assess their skills and qualities, consider their aims in life and set goals in order to realise and maximise their potential.",
            'image' => 'self-development.jpg',
        ]);
        Category::create([
            'name' => "Montage & Design",
            'description' => "Developers have to have some skills in a wide variety of coding niches.",
            'image' => 'development.jpg',
        ]);
        Category::create([
            'name' => "University",
            'description' => "institution of higher learning providing facilities for teaching and research and authorized to grant academic degrees.",
            'image' => 'literature.jpg',
        ]);
        Category::create([
            'name' => "Hobbies",
            'description' => "pursuit outside one's regular occupation engaged in especially for relaxation Writing is just a hobby of his. Her hobbies include gardening and bird-watching.",
            'image' => 'hobby.jpg',
        ]);
                Category::create([
            'name' => "Sport",
            'description' => "Sport pertains to any form of competitive physical activity or game that aims to use, maintain, or improve physical ability and skills while providing enjoyment.",
            'image' => 'sport.jpg',
        ]);
                Category::create([
            'name' => "Technology",
            'description' => "Smart, Innovative & Sustainble City With Invisible Infrastructure and Urban Development. Ideally Situated at The Crossroads of The World, it's Powerd by 100% Renewable Energy.",
            'image' => 'technology.jpg',
        ]);
                Category::create([
            'name' => "Economy",
            'description' => "an innovation raises a company's stock price by more than it would otherwise, and competing company stock prices don't suffer as much.",
            'image' => 'economy.jpg',
        ]);
    }
}

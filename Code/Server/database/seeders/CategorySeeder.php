<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
    }
}

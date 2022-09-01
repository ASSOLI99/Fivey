<?php

namespace Database\Seeders;

use App\Models\Course;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Course::create([
            'user_id' => 1,
            'category_id' => '1',
            'image' => 'gamer.jpg',
            'name' => 'New Gamer Developer In 2022',
            'tags' => 'game gamer Developer 2022 PC unreal_Engin',
            'state' => 0,
            'description' => "Games are different from work, which is usually carried out for remuneration, and from art, which is more often an expression of aesthetic or ideological elements.",
            'second_description' => "A game is a structured form of play, usually undertaken for entertainment or fun, and sometimes used as an educational tool.",
            'time' => '14',
            'language' => 'English'
        ]);
        Course::create([
            'user_id' => 2,
            'category_id' => '1',
            'image' => 'react.jpg',
            'name' => 'Front-End Developer React',
            'tags' => 'react front-end Developer 2022 Javascript',
            'state' => 0,
            'description' => "ReactJS is JavaScript library used for building reusable UI components. According to React official documentation, following is the definition",
            'second_description' => "for building composable user interfaces.",
            'time' => '24',
            'language' => 'Arabic'
        ]);
        Course::create([
            'user_id' => 2,
            'category_id' => '1',
            'image' => 'mobile-developer.jpg',
            'name' => 'Mobile Developer React Native',
            'tags' => 'react-native mobile-developer Developer 2022 Javascript',
            'state' => 0,
            'description' => "is a popular JavaScript-based mobile app framework that allows you to build natively-rendered mobile apps for iOS and Android.",
            'second_description' => "create an application for various platforms by using the same codebase",
            'time' => '20',
            'language' => 'Arabic'
        ]);
        Course::create([
            'user_id' => 3,
            'category_id' => '1',
            'image' => 'developer.jpg',
            'name' => 'Full-Stack Developer',
            'tags' => 'full-stack-Developer 2022',
            'state' => 0,
            'description' => "Full Stack Developers have to have some skills in a wide variety of coding niches",
            'second_description' => "from databases to graphic design and UI/UX management in order to do their job well",
            'time' => '32',
            'language' => 'English'
        ]);
    }
}

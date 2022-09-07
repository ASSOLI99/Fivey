<?php

namespace Database\Seeders;

use App\Models\Course;
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
        Course::create([
            'user_id' => 2,
            'category_id' => '2',
            'image' => 'business.jpg',
            'name' => 'How to grew your Business',
            'tags' => 'business company development 2022 money',
            'state' => 0,
            'description' => "You will gain more knowledge by trying and failing than by reading everything and doing nothing.",
            'second_description' => "As a business owner, you intuitively know what your business needs.",
            'time' => '10',
            'language' => 'English'
        ]);
        Course::create([
            'user_id' => 5,
            'category_id' => '2',
            'image' => 'creative think.jpg',
            'name' => 'develop your Mindset',
            'tags' => 'brain book development 2022 think',
            'state' => 0,
            'description' => "You will gain more knowledge by trying and failing than by reading everything and doing nothing.",
            'second_description' => "increase your knowledge with amazing hake",
            'time' => '9',
            'language' => 'Arabic'
        ]);
        Course::create([
            'user_id' => 6,
            'category_id' => '2',
            'image' => 'creative-book.jpg',
            'name' => 'Effective Readers ',
            'tags' => 'brain book development 2022 think readers',
            'state' => 0,
            'description' => " make you smarter to improve your reading and writing skills. If you want to understand what benefits one could reap from developing the habit of reading",
            'second_description' => "improve your focus, memory, empathy, and communication skills.",
            'time' => '20',
            'language' => 'Arabic'
        ]);
        Course::create([
            'user_id' => 7,
            'category_id' => '2',
            'image' => 'phone-detox.jpg',
            'name' => 'Phone Detox',
            'tags' => 'phone detox 2022 brain',
            'state' => 0,
            'description' => "Phone Detox for 2 weeks with big community and you will learn a lot of things thats will make you proud of your self",
            'second_description' => "start your Phone Detox for 2 weeks",
            'time' => '32',
            'language' => 'English'
        ]);
        Course::create([
            'user_id' => 5,
            'category_id' => '3',
            'image' => 'design.jpg',
            'name' => 'Create Amazing Designs',
            'tags' => 'business company development 2022 money',
            'state' => 0,
            'description' => "You will gain more knowledge by trying and failing than by reading everything and doing nothing.",
            'second_description' => "As a designer, you intuitively know what your design needs.",
            'time' => '15',
            'language' => 'English'
        ]);
        Course::create([
            'user_id' => 5,
            'category_id' => '3',
            'image' => 'photoshop.jpg',
            'name' => 'Learn Adobe Photoshop 2022',
            'tags' => 'brain book development 2022 think',
            'state' => 0,
            'description' => "You will gain more knowledge by trying and failing than by reading everything and doing nothing.",
            'second_description' => "increase your knowledge with amazing hake",
            'time' => '27',
            'language' => 'Arabic'
        ]);
        Course::create([
            'user_id' => 6,
            'category_id' => '3',
            'image' => 'premiere pro.jpg',
            'name' => 'Learn Premiere Pro 2022',
            'tags' => 'brain book development 2022 think readers',
            'state' => 0,
            'description' => "Premiere Pro hack with amazing tools",
            'second_description' => "improve your Montage Skills And get A job",
            'time' => '24',
            'language' => 'Arabic'
        ]);
        Course::create([
            'user_id' => 7,
            'category_id' => '3',
            'image' => 'ui-ux.jpg',
            'name' => 'Master Ui&Ux 2022',
            'tags' => 'phone detox 2022 brain',
            'state' => 0,
            'description' => "The Ui Ux course that will take you from zero to hero step by step",
            'second_description' => "The Ui Ux course that will take you from zero to hero step by step",
            'time' => '12',
            'language' => 'English'
        ]);
        Course::create([
            'user_id' => 1,
            'category_id' => '4',
            'image' => 'calculus.jpg',
            'name' => 'Calculus 101',
            'tags' => 'game gamer Developer 2022 PC unreal_Engin',
            'state' => 0,
            'description' => "the calculus book in one course to achieve 100% mark",
            'second_description' => "the calculus book in one course to achieve 100% mark",
            'time' => '18',
            'language' => 'Arabic'
        ]);
        Course::create([
            'user_id' => 2,
            'category_id' => '4',
            'image' => 'arabic.jpg',
            'name' => 'Arabic 102',
            'tags' => 'react front-end Developer 2022 Javascript',
            'state' => 0,
            'description' => "the Arabic 102 book in one course to achieve 100% mark",
            'second_description' => "the Arabic 102 book in one course to achieve 100% mark",
            'time' => '18',
            'language' => 'Arabic'
        ]);
        Course::create([
            'user_id' => 2,
            'category_id' => '4',
            'image' => 'english-102.jpg',
            'name' => 'English 102',
            'tags' => 'react-native mobile-developer Developer 2022 Javascript',
            'state' => 0,
            'description' => "the English 102 book in one course to achieve 100% mark",
            'second_description' => "the English 102 book in one course to achieve 100% mark",
            'time' => '20',
            'language' => 'Arabic'
        ]);
        Course::create([
            'user_id' => 2,
            'category_id' => '4',
            'image' => 'physics 102.jpg',
            'name' => 'Physics 101',
            'tags' => 'react-native mobile-developer Developer 2022 Javascript',
            'state' => 0,
            'description' => "the Physics 101 book in one course to achieve 100% mark",
            'second_description' => "the Physics 101 book in one course to achieve 100% mark",
            'time' => '19',
            'language' => 'Arabic'
        ]);
        Course::create([
            'user_id' => 3,
            'category_id' => '5',
            'image' => 'film.jpg',
            'name' => 'Film Making & Storytelling',
            'tags' => 'business company development 2022 money',
            'state' => 0,
            'description' => "We will Create 3 films from zero with home equipment",
            'second_description' => "We will Create 3 films from zero with home equipment",
            'time' => '16',
            'language' => 'English'
        ]);
        Course::create([
            'user_id' => 5,
            'category_id' => '5',
            'image' => 'food.jpg',
            'name' => 'The Master Chef',
            'tags' => 'brain book development 2022 think',
            'state' => 0,
            'description' => "Learn the basics and the some Tasty foods ",
            'second_description' => "Learn the basics and the some Tasty foods",
            'time' => '25',
            'language' => 'English'
        ]);
        Course::create([
            'user_id' => 6,
            'category_id' => '5',
            'image' => 'fish.jpg',
            'name' => 'Fish A Fish ',
            'tags' => 'brain book development 2022 think readers',
            'state' => 0,
            'description' => "you will go with me in a big journey in the red sea and fish some fishes",
            'second_description' => "you will go with me in a big journey in the red sea and fish some fishes",
            'time' => '15',
            'language' => 'English'
        ]);
        Course::create([
            'user_id' => 7,
            'category_id' => '5',
            'image' => 'art.jpg',
            'name' => 'Art With Me',
            'tags' => 'phone detox 2022 brain',
            'state' => 0,
            'description' => "learn how to drew and make the master art design",
            'second_description' => "learn how to drew and make the master art design",
            'time' => '12',
            'language' => 'English'
        ]);
    }
}

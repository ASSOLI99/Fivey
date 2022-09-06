<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'email' => 'gamer@gmail.com',
            'password' => Hash::make('12345._Aa'),
            'name' => 'Mark Legend',
            'userName' => 'Mark99',
            'description' => 'Gamer Developer with more than 7 years experince using C#, Java, Unreal Engin, Unity. Gamer Developer with more than 7years experince using C#, Java, Unreal Engin, Unity Gamer Developer with more than 7 years experince using C#, Java, Unreal Engin, Unity. Gamer Developer with more than 7years experince using C#, Java, Unreal Engin, Unity Gamer Developer with more than 7 years experince using C#, Java, Unreal Engin, Unity. Gamer Developer with more than 7years experince using C#, Java, Unreal Engin, Unity',
            'image' => "gamer.jpg",
            'field' => "Gamer Developer",
            'youtube'=>'https://www.youtube.com/',
            'linkedin'=>'https://www.linkedin.com/feed/',
            'facebook'=>'https://www.facebook.com/',
            'phone'=>'120840912',
            'role' => 2,
        ]);
        User::create([
            'email' => 'front@gmail.com',
            'password' => Hash::make('12345._Aa'),
            'name' => 'Mohammed Majed',
            'userName' => 'Moh99',
            'description' => 'Front-End Developer with more than 12 years experince using HTML, CSS, Javascript, React. Front-End Developer with more than 12 years experince using HTML, CSS, Javascript, React. Front-End Developer with more than 12 years experince using HTML, CSS, Javascript, React. Front-End Developer with more than 12 years experince using HTML, CSS, Javascript, React. Front-End Developer with more than 12 years experince using HTML, CSS, Javascript, React. Front-End Developer with more than 12 years experince using HTML, CSS, Javascript, React.',
            'image' => "front.jpg",
            'field' => "Front-End",
            'youtube'=>'https://www.youtube.com/',
            'linkedin'=>'https://www.linkedin.com/feed/',
            'facebook'=>'https://www.facebook.com/',
            'phone'=>'077223147',
            'role' => 2,
        ]);
        User::create([
            'email' => 'fullStack@gmail.com',
            'password' => Hash::make('12345._Aa'),
            'name' => 'Leon Mark',
            'userName' => 'Leo99',
            'description' => 'full-stack Developer with more than 10 years experince using HTML, CSS, Javascript, React, PHP, MySQL, Laravel, full-stack Developer with more than 10 years experince using HTML, CSS, Javascript, React, PHP, MySQL, Laravel. full-stack Developer with more than 10 years experince using HTML, CSS, Javascript, React, PHP, MySQL, Laravel, full-stack Developer with more than 10 years experince using HTML, CSS, Javascript, React, PHP, MySQL, Laravel. full-stack Developer with more than 10 years experince using HTML, CSS, Javascript, React, PHP, MySQL, Laravel, full-stack Developer with more than 10 years experince using HTML, CSS, Javascript, React, PHP, MySQL, Laravel.',
            'image' => "full-stack.jpg",
            'field' => "full-stack-developer",
            'youtube'=>'https://www.youtube.com/',
            'linkedin'=>'https://www.linkedin.com/feed/',
            'facebook'=>'https://www.facebook.com/',
            'phone'=>'077223147',
            'role' => 2,
        ]);
        User::create([
            'email' => 'admin@gmail.com',
            'password' => Hash::make('12345_54321Aa'),
            'name' => 'Admin',
            'userName' => 'Admin',
            'description' => 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
            'image' => "",
            'field' => "Admin",
            'youtube'=>'https://www.youtube.com/',
            'linkedin'=>'https://www.linkedin.com/feed/',
            'facebook'=>'https://www.facebook.com/',
            'phone'=>'0778093279',
            'role' => 0,
        ]);
          User::create([
            'email' => 'sora@gmail.com',
            'password' => Hash::make('12345._Aa'),
            'name' => 'Sora Rona',
            'userName' => 'Sora99',
            'description' => 'Business Women and founder for 4 big companies Business Women and founder for 4 big companies Business Women and founder for 4 big companies Business Women and founder for 4 big companies Business Women and founder for 4 big companies Business Women and founder for 4 big companies Business Women and founder for 4 big companies Business Women and founder for 4 big companies Business Women and founder for 4 big companies ',
            'image' => "sora.jpg",
            'field' => "Business Women",
            'youtube'=>'https://www.youtube.com/',
            'linkedin'=>'https://www.linkedin.com/feed/',
            'facebook'=>'https://www.facebook.com/',
            'phone'=>'120840912',
            'role' => 2,
        ]);
        User::create([
            'email' => 'john@gmail.com',
            'password' => Hash::make('12345._Aa'),
            'name' => 'John Ma',
            'userName' => 'john99',
            'description' => 'author of 3 books achieved many prizes author of 3 books achieved many prizes author of 3 books achieved many prizes author of 3 books achieved many prizes v  author of 3 books achieved many prizes author of 3 books achieved many prizes author of 3 books achieved many prizes author of 3 books achieved many prizes author of 3 books achieved many prizes v vauthor of 3 books achieved many prizes author of 3 books achieved many prizes author of 3 books achieved many prizes',
            'image' => "john.jpg",
            'field' => "Author",
            'youtube'=>'https://www.youtube.com/',
            'linkedin'=>'https://www.linkedin.com/feed/',
            'facebook'=>'https://www.facebook.com/',
            'phone'=>'077223147',
            'role' => 2,
        ]);
        User::create([
            'email' => 'Samer@gmail.com',
            'password' => Hash::make('12345._Aa'),
            'name' => 'Samer Majdi',
            'userName' => 'Samer99',
            'description' => 'Job Coach and business owner of 2 companies Job Coach and business owner of 2 companies Job Coach and business owner of 2 companies Job Coach and business owner of 2 companies Job Coach and business owner of 2 companies Job Coach and business owner of 2 companies Job Coach and business owner of 2 companies Job Coach and business owner of 2 companies Job Coach and business owner of 2 companies Job Coach and business owner of 2 companies Job Coach and business owner of 2 companies Job Coach and business owner of 2 companies Job Coach and business owner of 2 companies Job Coach and business owner of 2 companies vJob Coach and business owner of 2 companies',
            'image' => "full-stack.jpg",
            'field' => "Job Coach",
            'youtube'=>'https://www.youtube.com/',
            'linkedin'=>'https://www.linkedin.com/feed/',
            'facebook'=>'https://www.facebook.com/',
            'phone'=>'077223147',
            'role' => 2,
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use App\Http\Requests\UpdateCourseRequest;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $name = DB::table('users')->where('name', 'John')->pluck('name');'courses.description As course_description',
        $courses = DB::table('courses')->join('users', 'courses.user_id', '=', 'users.id')->select('courses.id As course_id', 'courses.name As course_name', 'courses.image As course_image', 'courses.state As course_state', 'users.name As user_name')->paginate(10);
        // join('users','users.id',"=",'courses.user_id')->paginate(10);
        return response($courses, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCourseRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required|string',
                'description' => 'required|string|min:20',
                'second_description' => 'required|string|min:20',
                'tags' => 'nullable',
                'language' => 'required|string',
                'image' => 'required|max:5048|mimes:jpeg,jpg,png',
                'time' => 'required',
            ]

        );
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()->all()]);
        }
        $course = new Course();
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $filename = time() . random_int(1, 99) . '.' . $image->getClientOriginalExtension();

            $destinationPath = public_path('/img/course/');
            $image->move($destinationPath, $filename);
            $course->image = $filename;
        }
        $course->name = $request->name;
        $course->description = $request->description;
        $course->second_description = $request->second_description;
        $course->tags = $request->tags;
        $course->language = $request->language;
        $course->user_id = $request->user_id;
        $course->category_id = $request->category_id;
        $course->time = $request->time;
        $course->save();
        return response($course, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $courses = Course::where('category_id', $id)->take(8)->get();
        return response($courses);
    }
    public function search($id)
    {
        $courses = Course::where('name', 'like', '%' . $id . '%')->orderBy('name')->paginate(12);
        return response($courses);
    }
    public function showOne($id)
    {
        $courses = Course::where('id', $id)->get();
        return response($courses);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function edit(Course $course)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCourseRequest  $request
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //   return  response($request->file('image'));

        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required|string',
                'description' => 'required|string|min:20',
                'second_description' => 'required|string|min:20',
                'tags' => 'nullable',
                'language' => 'required|string',
                'image' => 'nullable|max:5048|mimes:jpeg,jpg,png',
                'time' => 'required',
            ]

        );
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()->all()]);
        }
        $course = Course::find($id);
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $filename = time() . random_int(1, 99) . '.' . $image->getClientOriginalExtension();

            $destinationPath = public_path('/img/course/');
            $image->move($destinationPath, $filename);
            $course->image = $filename;
        }
        $course->name = $request->name;
        $course->description = $request->description;
        $course->second_description = $request->second_description;
        $course->tags = $request->tags;
        $course->language = $request->language;
        $course->user_id = $request->user_id;
        $course->category_id = $request->category_id;
        $course->time = $request->time;
        $course->update();
        return response($course, 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Course::where('id', '=', $id)->delete();
    }
    public function userCourses($id)
    {
        $courses = DB::table('courses')->where('user_id', '=', $id)->paginate(8);
        return response($courses, 200);
    }
    public function categoryCourses($id)
    {
        $courses = DB::table('courses')->where('category_id', '=', $id)->paginate(12);
        return response($courses, 200);
    }
    public function userCourse($id)
    {
        $courses = DB::table('courses')->where('id', '=', $id)->select('user_id', 'image', 'time')->get();
        return response($courses, 200);
    }
    public function fullCourse($id)
    {
        // $name = DB::table('users')->where('name', 'John')->pluck('name');'courses.description As course_description',
        $course = DB::table('courses')
            ->join('users', 'courses.user_id', '=', 'users.id')
            ->join('videos', function ($join) use ($id) {
                $join->on('courses.id', '=', 'videos.course_id')
                    ->where('videos.course_id', '=', $id);
            })
            ->select(
                'courses.name As course_name',
                'courses.image As course_image',
                'courses.language As course_language',
                'courses.time As course_time',
                'users.name As instructor_name',
                'users.field As instructor_field',
                'users.image As instructor_image',
                'users.id As instructor_id',
                'videos.id As video_id',
                'videos.name As video_name',
                'videos.length As video_length',
                'videos.description As video_description',
                'videos.state As video_state',
            )
            ->paginate(10);
        // join('users','users.id',"=",'courses.user_id')->paginate(10);
        return response($course, 200);
    }
}

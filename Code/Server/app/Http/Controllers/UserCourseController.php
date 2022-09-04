<?php

namespace App\Http\Controllers;

use App\Models\UserCourse;
use App\Http\Requests\StoreUserCourseRequest;
use App\Http\Requests\UpdateUserCourseRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserCourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param  \App\Http\Requests\StoreUserCourseRequest  $request
     * @return \Illuminate\Http\Response
     */
   public function store(Request $request)
    {
        // return response($request);
        $validator = Validator::make(
            $request->all(),
            [
                'user_id' => 'required',
                'course_id' => 'required',
            ]

        );
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()->all()]);
        }
        $nCourse = new UserCourse();
        $nCourse->user_id = $request->user_id;
        $nCourse->course_id = $request->course_id;
        $nCourse->save();
        return response($nCourse);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UserCourse  $userCourse
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $courses = UserCourse::where('user_id', $id)->get();
        return response($courses);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\UserCourse  $userCourse
     * @return \Illuminate\Http\Response
     */
    public function edit(UserCourse $userCourse)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateUserCourseRequest  $request
     * @param  \App\Models\UserCourse  $userCourse
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUserCourseRequest $request, UserCourse $userCourse)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UserCourse  $userCourse
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserCourse $userCourse)
    {
        //
    }
}
<?php

namespace App\Http\Controllers;

use App\Models\Video;
use App\Http\Requests\StoreVideoRequest;
use App\Http\Requests\UpdateVideoRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
// use App\Http\Controllers\getID3;

class VideoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $videos = DB::table('videos')->where('course_id','=',$id)->paginate(12);
        return response($videos, 200);
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
     * @param  \App\Http\Requests\StoreVideoRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required|string',
                'description' => 'nullable|string',
                'video' => 'required|max:1096000|mimes:mp4',
                'course_id' => 'required',
            ]

        );
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()->all()]);
        }
        $course = new Video();
        if ($request->hasFile('video')) {
            $video = $request->file('video');
            $filename = time() . random_int(1, 99) . '.' . $video->getClientOriginalExtension();

            $destinationPath = public_path('/video/course/');
            $video->move($destinationPath, $filename);
            $course->video = $filename;
        }
        $path = public_path("video/course/" . $filename);
        $getID3 = new \getID3;
        $file = $getID3->analyze($path);
        $duration = $file['playtime_seconds'];
        $course->name = $request->name;
        $course->description = $request->description;
        $course->course_id = $request->course_id;
        $course->length = round($duration);
        $course->save();
        return response($course, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Video  $video
     * @return \Illuminate\Http\Response
     */
    public function show(Video $video)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Video  $video
     * @return \Illuminate\Http\Response
     */
    public function edit(Video $video)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateVideoRequest  $request
     * @param  \App\Models\Video  $video
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateVideoRequest $request, Video $video)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Video  $video
     * @return \Illuminate\Http\Response
     */
    public function destroy(Video $video)
    {
        //
    }
}

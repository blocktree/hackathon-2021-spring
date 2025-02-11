/*
 * Copyright (C) 2017-2021 blocktree.
 * SPDX-License-Identifier: Apache-2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export default class GetEBPlatformRes {
	constructor (id: string, name:string, url: string, introduction: string) {
		this.id = id;
		this.name = name;
		this.url = url;
		this.introduction = introduction;
	}

    id: string; // 平台ID
	name: string; // 电商名称
	url:string; // 电商平台链接
	introduction: string; // 电商平台简介
}

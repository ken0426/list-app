# ToDolist-appの図

## userテーブル
| Column             | Type   | Options     |
| -------------------| ------ | ----------- |
|nickname            |string  |null: false  |
|email               |string  |null: false  |
|encrypted_password  |string  |null: false  |

### Association
has_many :list
belongs_to :point


## listテーブル

| Column      | Type       | Options         |
| ----------- | -----------| --------------- |
|text         |string      |null: false      |

### Association
belongs_to :user
has_one :point


## pointテーブル

| Column      | Type       | Options         |
| ----------- | -----------| --------------- |
|num          |string      |                 |

### Association
belongs_to :user
belongs_to :list


# アプリケーション概要
このアプリケーションを通して1日の積み上げを行うことができる

# UR

# テスト用アカウント

# 利用方法
アカウントを持っていなければ、アカウントを作成する
ログイン後、テキストボックスに今日1日で積み上げたいことを記述
記述が終わった後は横の送信を押す
そのタスクが完了したらそのタスクをクリックする
全てのタスクが完了したら「完了ボタン」を押す

# 目指した課題解決
毎日ただ何も考えずに過ごすのではなく、1日1日を大切にし、時間の大切さを実感し、
人生をただ何も考えずに「消化」している人への課題アプリとして制作をした

# 洗い出した要件
1日あたり6つまでのタスクにする。理由として、1日に6つ以上の作業をするのは多すぎるからである。
また、経験値の機能を実装し、レベルアップする機能を加えることで、毎日の生活がゲーム感覚で積み上げすることができる

# 実装した機能についてのGIFと説明

# 実装予定の機能
現在、リストがうまく投稿できるかを実装しているが、終わり次第、経験値機能を実装する

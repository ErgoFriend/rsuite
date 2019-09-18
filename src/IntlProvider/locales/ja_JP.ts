const Calendar = {
  sunday: '日',
  monday: '月',
  tuesday: '火',
  wednesday: '水',
  thursday: '木',
  friday: '金',
  saturday: '土',
  ok: 'はい',
  today: '今日',
  yesterday: '昨日',
  hours: '時',
  minutes: '分',
  seconds: '秒',
  titleFormat: 'YYYY 年 MM 月'
};

export default {
  Pagination: {
    more: 'さらに読み込む',
    prev: '戻る',
    next: '次へ',
    first: '最初',
    last: '最後'
  },
  Table: {
    emptyMessage: 'データがありません',
    loading: '読み込んでいます...'
  },
  TablePagination: {
    lengthMenuInfo: '{0} / ページ',
    totalInfo: '合計: {0}'
  },
  Calendar,
  DatePicker: {
    ...Calendar
  },
  DateRangePicker: {
    ...Calendar,
    last7Days: '最近の7日間'
  },
  Picker: {
    noResultsText: '見つかりませんでした',
    placeholder: '選択する',
    searchPlaceholder: '探す',
    checkAll: '全て'
  },
  InputPicker: {
    newItem: '新規作成',
    createOption: 'オプションを作成 "{0}"'
  },
  Uploader: {
    inited: '初期状態です',
    progress: 'アップロードしています',
    error: 'エラー',
    complete: '完了しました',
    emptyFile: 'ファイルが空です',
    upload: 'アップロード'
  }
};

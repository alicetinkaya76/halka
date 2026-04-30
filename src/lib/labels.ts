// src/lib/labels.ts
//
// Şemadaki snake_case enum değerlerinin insan-okunur Türkçe karşılıkları.
// Şemada yeni bir değer eklendiğinde bu mapping de güncellenmeli.

export const claimTypeLabels: Record<string, string> = {
  ana_tez: 'Ana tez',
  metodolojik_tez: 'Metodolojik tez',
  tarihsel_duzeltme: 'Tarihsel düzeltme',
  nedensellik_tezi: 'Nedensellik tezi',
  kulturel_tez: 'Kültürel tez',
  karsilastirmali_tez: 'Karşılaştırmalı tez',
  kavramsal_tez: 'Kavramsal tez',
  kurumsal_tez: 'Kurumsal tez',
  ekonomik_nedensellik_tezi: 'Ekonomik nedensellik tezi',
  kulturel_tarih_tezi: 'Kültürel tarih tezi',
  tarihyazimi_tezi: 'Tarihyazımı tezi',
  degerlendirme: 'Değerlendirme',
  yorumsal_sentez: 'Yorumsal sentez',
  varisler_hakkinda_tez: 'Varisler hakkında tez',
};

export const bookRelationLabels: Record<string, string> = {
  kismen_celisir: 'Kısmen çelişir',
  celisir: 'Çelişir',
  uyumlu: 'Uyumlu',
  tematik_tamamlayici: 'Tematik tamamlayıcı',
  teknik_tamamlayici: 'Teknik tamamlayıcı',
  kurumsal_tamamlayici: 'Kurumsal tamamlayıcı',
  olcek_karsitligi: 'Ölçek karşıtlığı',
  ters_yon: 'Ters yön',
  dogrudan_kaynak: 'Doğrudan kaynak',
  cogul_revizyon: 'Çoğul revizyon',
};

export const claimRelationLabels: Record<string, string> = {
  conflicts_with: 'çelişiyor',
  supports: 'destekliyor',
  extends: 'genişletiyor',
  qualifies: 'sınırlandırıyor',
  reframes: 'yeniden çerçeveliyor',
  cites: 'atıf yapıyor',
};

export const statusLabels: Record<string, string> = {
  planlanan: 'planlanan',
  sirada: 'sırada',
  okunuyor: 'okunuyor',
  okundu: 'okundu',
};

export const statusColors: Record<string, string> = {
  planlanan: 'text-ink-400',
  sirada: 'text-ink-500',
  okunuyor: 'text-emerald',
  okundu: 'text-ink-600',
};

export const eurocentrismLabels: Record<string, string> = {
  Eurocentric: 'Eurocentric',
  'anti-Eurocentric': 'anti-Eurocentric',
  'noteurocentric-but-comparative': 'karşılaştırmacı',
  agnostic: 'agnostik',
};

export const baghdadCentrismLabels: Record<string, string> = {
  'Baghdad-centric': 'Bağdat-merkezci',
  'anti-Baghdad-centric': 'anti-Bağdat-merkezci',
  multipolar: 'çok-merkezli',
  agnostic: 'agnostik',
};

export const internalistExternalistLabels: Record<string, string> = {
  internalist: 'içselci',
  externalist: 'dışsalcı',
  mixed: 'karışık',
};
